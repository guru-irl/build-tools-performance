import React from 'react';
const LABEL_29272 = 'component_29272';
export function Component29272({ value = 29272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29272, 'data-value': derived.doubled }, children);
}
export default Component29272;
