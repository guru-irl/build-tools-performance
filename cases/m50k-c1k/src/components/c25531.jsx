import React from 'react';
const LABEL_25531 = 'component_25531';
export function Component25531({ value = 25531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25531, 'data-value': derived.doubled }, children);
}
export default Component25531;
