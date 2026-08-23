import React from 'react';
const LABEL_34514 = 'component_34514';
export function Component34514({ value = 34514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34514, 'data-value': derived.doubled }, children);
}
export default Component34514;
