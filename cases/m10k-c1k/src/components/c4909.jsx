import React from 'react';
const LABEL_4909 = 'component_4909';
export function Component4909({ value = 4909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4909, 'data-value': derived.doubled }, children);
}
export default Component4909;
