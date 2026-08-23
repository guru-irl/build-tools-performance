import React from 'react';
const LABEL_17295 = 'component_17295';
export function Component17295({ value = 17295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17295, 'data-value': derived.doubled }, children);
}
export default Component17295;
