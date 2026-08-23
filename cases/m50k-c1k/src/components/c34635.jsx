import React from 'react';
const LABEL_34635 = 'component_34635';
export function Component34635({ value = 34635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34635, 'data-value': derived.doubled }, children);
}
export default Component34635;
