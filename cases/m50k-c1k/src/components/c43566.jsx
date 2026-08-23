import React from 'react';
const LABEL_43566 = 'component_43566';
export function Component43566({ value = 43566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43566, 'data-value': derived.doubled }, children);
}
export default Component43566;
