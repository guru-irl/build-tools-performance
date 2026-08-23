import React from 'react';
const LABEL_43152 = 'component_43152';
export function Component43152({ value = 43152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43152, 'data-value': derived.doubled }, children);
}
export default Component43152;
