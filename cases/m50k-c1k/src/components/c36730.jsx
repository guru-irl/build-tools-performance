import React from 'react';
const LABEL_36730 = 'component_36730';
export function Component36730({ value = 36730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36730, 'data-value': derived.doubled }, children);
}
export default Component36730;
