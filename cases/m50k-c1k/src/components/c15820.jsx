import React from 'react';
const LABEL_15820 = 'component_15820';
export function Component15820({ value = 15820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15820, 'data-value': derived.doubled }, children);
}
export default Component15820;
