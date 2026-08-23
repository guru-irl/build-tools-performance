import React from 'react';
const LABEL_38415 = 'component_38415';
export function Component38415({ value = 38415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38415, 'data-value': derived.doubled }, children);
}
export default Component38415;
