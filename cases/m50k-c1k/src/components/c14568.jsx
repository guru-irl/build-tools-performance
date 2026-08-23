import React from 'react';
const LABEL_14568 = 'component_14568';
export function Component14568({ value = 14568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14568, 'data-value': derived.doubled }, children);
}
export default Component14568;
