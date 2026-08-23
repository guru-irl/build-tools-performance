import React from 'react';
const LABEL_43186 = 'component_43186';
export function Component43186({ value = 43186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43186, 'data-value': derived.doubled }, children);
}
export default Component43186;
