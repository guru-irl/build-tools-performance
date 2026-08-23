import React from 'react';
const LABEL_36267 = 'component_36267';
export function Component36267({ value = 36267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36267, 'data-value': derived.doubled }, children);
}
export default Component36267;
