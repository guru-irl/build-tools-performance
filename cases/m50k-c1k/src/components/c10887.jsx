import React from 'react';
const LABEL_10887 = 'component_10887';
export function Component10887({ value = 10887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10887, 'data-value': derived.doubled }, children);
}
export default Component10887;
