import React from 'react';
const LABEL_43725 = 'component_43725';
export function Component43725({ value = 43725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43725, 'data-value': derived.doubled }, children);
}
export default Component43725;
