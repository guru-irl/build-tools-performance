import React from 'react';
const LABEL_45602 = 'component_45602';
export function Component45602({ value = 45602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45602, 'data-value': derived.doubled }, children);
}
export default Component45602;
