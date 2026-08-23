import React from 'react';
const LABEL_43084 = 'component_43084';
export function Component43084({ value = 43084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43084, 'data-value': derived.doubled }, children);
}
export default Component43084;
