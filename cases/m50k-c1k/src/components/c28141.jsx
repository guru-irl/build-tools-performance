import React from 'react';
const LABEL_28141 = 'component_28141';
export function Component28141({ value = 28141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28141, 'data-value': derived.doubled }, children);
}
export default Component28141;
