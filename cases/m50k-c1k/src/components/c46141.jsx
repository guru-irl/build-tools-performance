import React from 'react';
const LABEL_46141 = 'component_46141';
export function Component46141({ value = 46141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46141, 'data-value': derived.doubled }, children);
}
export default Component46141;
