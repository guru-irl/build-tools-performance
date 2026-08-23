import React from 'react';
const LABEL_38353 = 'component_38353';
export function Component38353({ value = 38353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38353, 'data-value': derived.doubled }, children);
}
export default Component38353;
