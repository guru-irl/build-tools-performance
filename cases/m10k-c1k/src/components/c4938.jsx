import React from 'react';
const LABEL_4938 = 'component_4938';
export function Component4938({ value = 4938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4938, 'data-value': derived.doubled }, children);
}
export default Component4938;
