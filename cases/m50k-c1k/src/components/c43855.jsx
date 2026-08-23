import React from 'react';
const LABEL_43855 = 'component_43855';
export function Component43855({ value = 43855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43855, 'data-value': derived.doubled }, children);
}
export default Component43855;
