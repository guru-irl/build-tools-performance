import React from 'react';
const LABEL_32272 = 'component_32272';
export function Component32272({ value = 32272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32272, 'data-value': derived.doubled }, children);
}
export default Component32272;
