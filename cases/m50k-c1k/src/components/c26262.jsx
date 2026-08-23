import React from 'react';
const LABEL_26262 = 'component_26262';
export function Component26262({ value = 26262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26262, 'data-value': derived.doubled }, children);
}
export default Component26262;
