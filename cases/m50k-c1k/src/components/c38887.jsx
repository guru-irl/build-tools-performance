import React from 'react';
const LABEL_38887 = 'component_38887';
export function Component38887({ value = 38887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38887, 'data-value': derived.doubled }, children);
}
export default Component38887;
