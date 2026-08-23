import React from 'react';
const LABEL_3938 = 'component_3938';
export function Component3938({ value = 3938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3938, 'data-value': derived.doubled }, children);
}
export default Component3938;
