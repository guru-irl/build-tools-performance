import React from 'react';
const LABEL_11267 = 'component_11267';
export function Component11267({ value = 11267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11267, 'data-value': derived.doubled }, children);
}
export default Component11267;
