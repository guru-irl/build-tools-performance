import React from 'react';
const LABEL_45141 = 'component_45141';
export function Component45141({ value = 45141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45141, 'data-value': derived.doubled }, children);
}
export default Component45141;
