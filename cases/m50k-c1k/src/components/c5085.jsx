import React from 'react';
const LABEL_5085 = 'component_5085';
export function Component5085({ value = 5085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5085, 'data-value': derived.doubled }, children);
}
export default Component5085;
