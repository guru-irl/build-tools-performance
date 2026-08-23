import React from 'react';
const LABEL_2887 = 'component_2887';
export function Component2887({ value = 2887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2887, 'data-value': derived.doubled }, children);
}
export default Component2887;
