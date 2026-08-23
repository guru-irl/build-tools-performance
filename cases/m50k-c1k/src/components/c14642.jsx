import React from 'react';
const LABEL_14642 = 'component_14642';
export function Component14642({ value = 14642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14642, 'data-value': derived.doubled }, children);
}
export default Component14642;
