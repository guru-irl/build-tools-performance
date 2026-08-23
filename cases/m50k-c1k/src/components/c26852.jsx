import React from 'react';
const LABEL_26852 = 'component_26852';
export function Component26852({ value = 26852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26852, 'data-value': derived.doubled }, children);
}
export default Component26852;
