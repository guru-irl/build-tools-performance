import React from 'react';
const LABEL_45157 = 'component_45157';
export function Component45157({ value = 45157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45157, 'data-value': derived.doubled }, children);
}
export default Component45157;
