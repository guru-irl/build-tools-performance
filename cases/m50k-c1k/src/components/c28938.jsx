import React from 'react';
const LABEL_28938 = 'component_28938';
export function Component28938({ value = 28938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28938, 'data-value': derived.doubled }, children);
}
export default Component28938;
