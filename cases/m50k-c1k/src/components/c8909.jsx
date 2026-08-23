import React from 'react';
const LABEL_8909 = 'component_8909';
export function Component8909({ value = 8909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8909, 'data-value': derived.doubled }, children);
}
export default Component8909;
