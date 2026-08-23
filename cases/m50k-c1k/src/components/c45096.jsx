import React from 'react';
const LABEL_45096 = 'component_45096';
export function Component45096({ value = 45096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45096, 'data-value': derived.doubled }, children);
}
export default Component45096;
