import React from 'react';
const LABEL_7887 = 'component_7887';
export function Component7887({ value = 7887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7887, 'data-value': derived.doubled }, children);
}
export default Component7887;
