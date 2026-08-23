import React from 'react';
const LABEL_43424 = 'component_43424';
export function Component43424({ value = 43424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43424, 'data-value': derived.doubled }, children);
}
export default Component43424;
