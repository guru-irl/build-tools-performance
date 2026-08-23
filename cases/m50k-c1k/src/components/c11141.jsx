import React from 'react';
const LABEL_11141 = 'component_11141';
export function Component11141({ value = 11141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11141, 'data-value': derived.doubled }, children);
}
export default Component11141;
