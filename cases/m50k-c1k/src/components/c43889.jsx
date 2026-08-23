import React from 'react';
const LABEL_43889 = 'component_43889';
export function Component43889({ value = 43889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43889, 'data-value': derived.doubled }, children);
}
export default Component43889;
