import React from 'react';
const LABEL_4141 = 'component_4141';
export function Component4141({ value = 4141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4141, 'data-value': derived.doubled }, children);
}
export default Component4141;
