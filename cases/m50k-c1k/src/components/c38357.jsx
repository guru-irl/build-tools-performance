import React from 'react';
const LABEL_38357 = 'component_38357';
export function Component38357({ value = 38357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38357, 'data-value': derived.doubled }, children);
}
export default Component38357;
