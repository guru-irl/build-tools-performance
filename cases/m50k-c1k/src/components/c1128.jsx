import React from 'react';
const LABEL_1128 = 'component_1128';
export function Component1128({ value = 1128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1128, 'data-value': derived.doubled }, children);
}
export default Component1128;
