import React from 'react';
const LABEL_15961 = 'component_15961';
export function Component15961({ value = 15961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15961, 'data-value': derived.doubled }, children);
}
export default Component15961;
