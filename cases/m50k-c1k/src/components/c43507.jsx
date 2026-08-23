import React from 'react';
const LABEL_43507 = 'component_43507';
export function Component43507({ value = 43507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43507, 'data-value': derived.doubled }, children);
}
export default Component43507;
