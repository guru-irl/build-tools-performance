import React from 'react';
const LABEL_663 = 'component_663';
export function Component663({ value = 663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_663, 'data-value': derived.doubled }, children);
}
export default Component663;
