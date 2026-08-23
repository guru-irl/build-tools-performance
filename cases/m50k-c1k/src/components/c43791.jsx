import React from 'react';
const LABEL_43791 = 'component_43791';
export function Component43791({ value = 43791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43791, 'data-value': derived.doubled }, children);
}
export default Component43791;
