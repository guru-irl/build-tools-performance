import React from 'react';
const LABEL_45344 = 'component_45344';
export function Component45344({ value = 45344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45344, 'data-value': derived.doubled }, children);
}
export default Component45344;
