import React from 'react';
const LABEL_22186 = 'component_22186';
export function Component22186({ value = 22186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22186, 'data-value': derived.doubled }, children);
}
export default Component22186;
