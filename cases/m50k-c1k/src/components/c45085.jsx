import React from 'react';
const LABEL_45085 = 'component_45085';
export function Component45085({ value = 45085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45085, 'data-value': derived.doubled }, children);
}
export default Component45085;
