import React from 'react';
const LABEL_35887 = 'component_35887';
export function Component35887({ value = 35887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35887, 'data-value': derived.doubled }, children);
}
export default Component35887;
