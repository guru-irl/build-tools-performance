import React from 'react';
const LABEL_18141 = 'component_18141';
export function Component18141({ value = 18141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18141, 'data-value': derived.doubled }, children);
}
export default Component18141;
