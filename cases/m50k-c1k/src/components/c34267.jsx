import React from 'react';
const LABEL_34267 = 'component_34267';
export function Component34267({ value = 34267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34267, 'data-value': derived.doubled }, children);
}
export default Component34267;
