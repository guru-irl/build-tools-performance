import React from 'react';
const LABEL_45930 = 'component_45930';
export function Component45930({ value = 45930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45930, 'data-value': derived.doubled }, children);
}
export default Component45930;
