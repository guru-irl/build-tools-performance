import React from 'react';
const LABEL_5827 = 'component_5827';
export function Component5827({ value = 5827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5827, 'data-value': derived.doubled }, children);
}
export default Component5827;
