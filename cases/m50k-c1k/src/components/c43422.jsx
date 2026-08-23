import React from 'react';
const LABEL_43422 = 'component_43422';
export function Component43422({ value = 43422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43422, 'data-value': derived.doubled }, children);
}
export default Component43422;
