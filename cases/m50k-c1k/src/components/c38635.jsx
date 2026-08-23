import React from 'react';
const LABEL_38635 = 'component_38635';
export function Component38635({ value = 38635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38635, 'data-value': derived.doubled }, children);
}
export default Component38635;
