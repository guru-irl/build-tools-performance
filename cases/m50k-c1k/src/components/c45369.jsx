import React from 'react';
const LABEL_45369 = 'component_45369';
export function Component45369({ value = 45369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45369, 'data-value': derived.doubled }, children);
}
export default Component45369;
