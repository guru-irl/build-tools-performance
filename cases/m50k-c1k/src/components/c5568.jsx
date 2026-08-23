import React from 'react';
const LABEL_5568 = 'component_5568';
export function Component5568({ value = 5568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5568, 'data-value': derived.doubled }, children);
}
export default Component5568;
