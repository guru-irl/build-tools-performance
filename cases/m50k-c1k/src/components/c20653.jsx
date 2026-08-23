import React from 'react';
const LABEL_20653 = 'component_20653';
export function Component20653({ value = 20653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20653, 'data-value': derived.doubled }, children);
}
export default Component20653;
