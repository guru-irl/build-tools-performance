import React from 'react';
const LABEL_5573 = 'component_5573';
export function Component5573({ value = 5573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5573, 'data-value': derived.doubled }, children);
}
export default Component5573;
