import React from 'react';
const LABEL_40887 = 'component_40887';
export function Component40887({ value = 40887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40887, 'data-value': derived.doubled }, children);
}
export default Component40887;
