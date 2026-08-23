import React from 'react';
const LABEL_45247 = 'component_45247';
export function Component45247({ value = 45247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45247, 'data-value': derived.doubled }, children);
}
export default Component45247;
