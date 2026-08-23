import React from 'react';
const LABEL_8153 = 'component_8153';
export function Component8153({ value = 8153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8153, 'data-value': derived.doubled }, children);
}
export default Component8153;
