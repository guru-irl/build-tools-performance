import React from 'react';
const LABEL_45722 = 'component_45722';
export function Component45722({ value = 45722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45722, 'data-value': derived.doubled }, children);
}
export default Component45722;
