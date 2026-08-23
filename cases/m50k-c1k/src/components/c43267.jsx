import React from 'react';
const LABEL_43267 = 'component_43267';
export function Component43267({ value = 43267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43267, 'data-value': derived.doubled }, children);
}
export default Component43267;
