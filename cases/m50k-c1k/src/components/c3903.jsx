import React from 'react';
const LABEL_3903 = 'component_3903';
export function Component3903({ value = 3903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3903, 'data-value': derived.doubled }, children);
}
export default Component3903;
