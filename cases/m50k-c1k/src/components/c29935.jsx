import React from 'react';
const LABEL_29935 = 'component_29935';
export function Component29935({ value = 29935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29935, 'data-value': derived.doubled }, children);
}
export default Component29935;
