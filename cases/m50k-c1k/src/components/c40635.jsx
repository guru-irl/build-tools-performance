import React from 'react';
const LABEL_40635 = 'component_40635';
export function Component40635({ value = 40635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40635, 'data-value': derived.doubled }, children);
}
export default Component40635;
