import React from 'react';
const LABEL_23820 = 'component_23820';
export function Component23820({ value = 23820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23820, 'data-value': derived.doubled }, children);
}
export default Component23820;
