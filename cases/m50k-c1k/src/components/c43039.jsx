import React from 'react';
const LABEL_43039 = 'component_43039';
export function Component43039({ value = 43039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43039, 'data-value': derived.doubled }, children);
}
export default Component43039;
