import React from 'react';
const LABEL_18938 = 'component_18938';
export function Component18938({ value = 18938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18938, 'data-value': derived.doubled }, children);
}
export default Component18938;
