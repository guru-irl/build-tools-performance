import React from 'react';
const LABEL_39820 = 'component_39820';
export function Component39820({ value = 39820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39820, 'data-value': derived.doubled }, children);
}
export default Component39820;
