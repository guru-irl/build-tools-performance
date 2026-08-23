import React from 'react';
const LABEL_42635 = 'component_42635';
export function Component42635({ value = 42635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42635, 'data-value': derived.doubled }, children);
}
export default Component42635;
