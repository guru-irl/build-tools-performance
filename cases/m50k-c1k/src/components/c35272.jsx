import React from 'react';
const LABEL_35272 = 'component_35272';
export function Component35272({ value = 35272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35272, 'data-value': derived.doubled }, children);
}
export default Component35272;
