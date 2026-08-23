import React from 'react';
const LABEL_2329 = 'component_2329';
export function Component2329({ value = 2329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2329, 'data-value': derived.doubled }, children);
}
export default Component2329;
