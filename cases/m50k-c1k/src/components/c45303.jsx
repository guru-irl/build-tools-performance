import React from 'react';
const LABEL_45303 = 'component_45303';
export function Component45303({ value = 45303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45303, 'data-value': derived.doubled }, children);
}
export default Component45303;
