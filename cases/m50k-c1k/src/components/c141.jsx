import React from 'react';
const LABEL_141 = 'component_141';
export function Component141({ value = 141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_141, 'data-value': derived.doubled }, children);
}
export default Component141;
