import React from 'react';
const LABEL_20141 = 'component_20141';
export function Component20141({ value = 20141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20141, 'data-value': derived.doubled }, children);
}
export default Component20141;
