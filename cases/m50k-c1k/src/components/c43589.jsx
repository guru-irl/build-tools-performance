import React from 'react';
const LABEL_43589 = 'component_43589';
export function Component43589({ value = 43589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43589, 'data-value': derived.doubled }, children);
}
export default Component43589;
