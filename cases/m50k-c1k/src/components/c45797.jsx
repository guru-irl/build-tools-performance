import React from 'react';
const LABEL_45797 = 'component_45797';
export function Component45797({ value = 45797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45797, 'data-value': derived.doubled }, children);
}
export default Component45797;
