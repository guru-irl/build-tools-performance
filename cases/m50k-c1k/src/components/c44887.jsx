import React from 'react';
const LABEL_44887 = 'component_44887';
export function Component44887({ value = 44887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44887, 'data-value': derived.doubled }, children);
}
export default Component44887;
