import React from 'react';
const LABEL_19607 = 'component_19607';
export function Component19607({ value = 19607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19607, 'data-value': derived.doubled }, children);
}
export default Component19607;
