import React from 'react';
const LABEL_34141 = 'component_34141';
export function Component34141({ value = 34141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34141, 'data-value': derived.doubled }, children);
}
export default Component34141;
