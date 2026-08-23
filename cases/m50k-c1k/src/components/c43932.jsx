import React from 'react';
const LABEL_43932 = 'component_43932';
export function Component43932({ value = 43932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43932, 'data-value': derived.doubled }, children);
}
export default Component43932;
