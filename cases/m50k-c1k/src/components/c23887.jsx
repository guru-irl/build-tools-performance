import React from 'react';
const LABEL_23887 = 'component_23887';
export function Component23887({ value = 23887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23887, 'data-value': derived.doubled }, children);
}
export default Component23887;
