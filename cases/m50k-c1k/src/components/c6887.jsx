import React from 'react';
const LABEL_6887 = 'component_6887';
export function Component6887({ value = 6887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6887, 'data-value': derived.doubled }, children);
}
export default Component6887;
