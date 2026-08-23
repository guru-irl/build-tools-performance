import React from 'react';
const LABEL_34759 = 'component_34759';
export function Component34759({ value = 34759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34759, 'data-value': derived.doubled }, children);
}
export default Component34759;
