import React from 'react';
const LABEL_43298 = 'component_43298';
export function Component43298({ value = 43298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43298, 'data-value': derived.doubled }, children);
}
export default Component43298;
