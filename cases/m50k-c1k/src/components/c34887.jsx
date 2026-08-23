import React from 'react';
const LABEL_34887 = 'component_34887';
export function Component34887({ value = 34887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34887, 'data-value': derived.doubled }, children);
}
export default Component34887;
