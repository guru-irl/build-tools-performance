import React from 'react';
const LABEL_7272 = 'component_7272';
export function Component7272({ value = 7272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7272, 'data-value': derived.doubled }, children);
}
export default Component7272;
