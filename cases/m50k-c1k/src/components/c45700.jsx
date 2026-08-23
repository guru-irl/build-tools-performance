import React from 'react';
const LABEL_45700 = 'component_45700';
export function Component45700({ value = 45700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45700, 'data-value': derived.doubled }, children);
}
export default Component45700;
