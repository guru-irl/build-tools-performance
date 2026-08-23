import React from 'react';
const LABEL_20472 = 'component_20472';
export function Component20472({ value = 20472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20472, 'data-value': derived.doubled }, children);
}
export default Component20472;
