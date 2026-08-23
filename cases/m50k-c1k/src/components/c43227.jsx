import React from 'react';
const LABEL_43227 = 'component_43227';
export function Component43227({ value = 43227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43227, 'data-value': derived.doubled }, children);
}
export default Component43227;
