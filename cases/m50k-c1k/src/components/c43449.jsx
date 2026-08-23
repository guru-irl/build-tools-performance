import React from 'react';
const LABEL_43449 = 'component_43449';
export function Component43449({ value = 43449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43449, 'data-value': derived.doubled }, children);
}
export default Component43449;
