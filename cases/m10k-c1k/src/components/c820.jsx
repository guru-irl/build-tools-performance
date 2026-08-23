import React from 'react';
const LABEL_820 = 'component_820';
export function Component820({ value = 820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_820, 'data-value': derived.doubled }, children);
}
export default Component820;
