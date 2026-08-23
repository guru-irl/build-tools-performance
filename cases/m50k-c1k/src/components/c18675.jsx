import React from 'react';
const LABEL_18675 = 'component_18675';
export function Component18675({ value = 18675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18675, 'data-value': derived.doubled }, children);
}
export default Component18675;
