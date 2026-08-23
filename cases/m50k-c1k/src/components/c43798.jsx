import React from 'react';
const LABEL_43798 = 'component_43798';
export function Component43798({ value = 43798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43798, 'data-value': derived.doubled }, children);
}
export default Component43798;
