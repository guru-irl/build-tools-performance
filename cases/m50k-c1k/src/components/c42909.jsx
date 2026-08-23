import React from 'react';
const LABEL_42909 = 'component_42909';
export function Component42909({ value = 42909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42909, 'data-value': derived.doubled }, children);
}
export default Component42909;
