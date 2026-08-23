import React from 'react';
const LABEL_36635 = 'component_36635';
export function Component36635({ value = 36635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36635, 'data-value': derived.doubled }, children);
}
export default Component36635;
