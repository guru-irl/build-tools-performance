import React from 'react';
const LABEL_46828 = 'component_46828';
export function Component46828({ value = 46828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46828, 'data-value': derived.doubled }, children);
}
export default Component46828;
