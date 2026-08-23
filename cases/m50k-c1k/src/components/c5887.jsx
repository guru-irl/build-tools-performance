import React from 'react';
const LABEL_5887 = 'component_5887';
export function Component5887({ value = 5887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5887, 'data-value': derived.doubled }, children);
}
export default Component5887;
