import React from 'react';
const LABEL_24272 = 'component_24272';
export function Component24272({ value = 24272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24272, 'data-value': derived.doubled }, children);
}
export default Component24272;
