import React from 'react';
const LABEL_3635 = 'component_3635';
export function Component3635({ value = 3635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3635, 'data-value': derived.doubled }, children);
}
export default Component3635;
