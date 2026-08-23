import React from 'react';
const LABEL_34436 = 'component_34436';
export function Component34436({ value = 34436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34436, 'data-value': derived.doubled }, children);
}
export default Component34436;
