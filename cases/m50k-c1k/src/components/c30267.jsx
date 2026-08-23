import React from 'react';
const LABEL_30267 = 'component_30267';
export function Component30267({ value = 30267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30267, 'data-value': derived.doubled }, children);
}
export default Component30267;
