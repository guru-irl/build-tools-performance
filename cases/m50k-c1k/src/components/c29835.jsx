import React from 'react';
const LABEL_29835 = 'component_29835';
export function Component29835({ value = 29835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29835, 'data-value': derived.doubled }, children);
}
export default Component29835;
