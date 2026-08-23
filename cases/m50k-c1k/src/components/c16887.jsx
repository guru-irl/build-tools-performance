import React from 'react';
const LABEL_16887 = 'component_16887';
export function Component16887({ value = 16887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16887, 'data-value': derived.doubled }, children);
}
export default Component16887;
