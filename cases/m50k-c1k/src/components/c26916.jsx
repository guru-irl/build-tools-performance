import React from 'react';
const LABEL_26916 = 'component_26916';
export function Component26916({ value = 26916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26916, 'data-value': derived.doubled }, children);
}
export default Component26916;
