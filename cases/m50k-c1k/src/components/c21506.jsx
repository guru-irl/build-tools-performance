import React from 'react';
const LABEL_21506 = 'component_21506';
export function Component21506({ value = 21506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21506, 'data-value': derived.doubled }, children);
}
export default Component21506;
