import React from 'react';
const LABEL_17938 = 'component_17938';
export function Component17938({ value = 17938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17938, 'data-value': derived.doubled }, children);
}
export default Component17938;
