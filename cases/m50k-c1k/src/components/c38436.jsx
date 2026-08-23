import React from 'react';
const LABEL_38436 = 'component_38436';
export function Component38436({ value = 38436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38436, 'data-value': derived.doubled }, children);
}
export default Component38436;
