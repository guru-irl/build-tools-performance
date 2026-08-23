import React from 'react';
const LABEL_11887 = 'component_11887';
export function Component11887({ value = 11887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11887, 'data-value': derived.doubled }, children);
}
export default Component11887;
