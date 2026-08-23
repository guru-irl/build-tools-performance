import React from 'react';
const LABEL_39072 = 'component_39072';
export function Component39072({ value = 39072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39072, 'data-value': derived.doubled }, children);
}
export default Component39072;
