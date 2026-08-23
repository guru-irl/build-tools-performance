import React from 'react';
const LABEL_18635 = 'component_18635';
export function Component18635({ value = 18635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18635, 'data-value': derived.doubled }, children);
}
export default Component18635;
