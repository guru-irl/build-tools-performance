import React from 'react';
const LABEL_43040 = 'component_43040';
export function Component43040({ value = 43040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43040, 'data-value': derived.doubled }, children);
}
export default Component43040;
