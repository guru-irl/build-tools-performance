import React from 'react';
const LABEL_15655 = 'component_15655';
export function Component15655({ value = 15655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15655, 'data-value': derived.doubled }, children);
}
export default Component15655;
