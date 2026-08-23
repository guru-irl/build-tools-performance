import React from 'react';
const LABEL_26186 = 'component_26186';
export function Component26186({ value = 26186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26186, 'data-value': derived.doubled }, children);
}
export default Component26186;
