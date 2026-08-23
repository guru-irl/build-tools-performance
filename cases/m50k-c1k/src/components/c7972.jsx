import React from 'react';
const LABEL_7972 = 'component_7972';
export function Component7972({ value = 7972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7972, 'data-value': derived.doubled }, children);
}
export default Component7972;
