import React from 'react';
const LABEL_3024 = 'component_3024';
export function Component3024({ value = 3024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3024, 'data-value': derived.doubled }, children);
}
export default Component3024;
