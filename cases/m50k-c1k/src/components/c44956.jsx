import React from 'react';
const LABEL_44956 = 'component_44956';
export function Component44956({ value = 44956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44956, 'data-value': derived.doubled }, children);
}
export default Component44956;
