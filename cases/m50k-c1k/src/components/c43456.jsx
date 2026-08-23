import React from 'react';
const LABEL_43456 = 'component_43456';
export function Component43456({ value = 43456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43456, 'data-value': derived.doubled }, children);
}
export default Component43456;
