import React from 'react';
const LABEL_21887 = 'component_21887';
export function Component21887({ value = 21887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21887, 'data-value': derived.doubled }, children);
}
export default Component21887;
