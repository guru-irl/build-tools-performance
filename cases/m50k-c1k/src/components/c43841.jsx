import React from 'react';
const LABEL_43841 = 'component_43841';
export function Component43841({ value = 43841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43841, 'data-value': derived.doubled }, children);
}
export default Component43841;
