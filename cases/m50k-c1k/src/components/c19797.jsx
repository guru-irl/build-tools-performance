import React from 'react';
const LABEL_19797 = 'component_19797';
export function Component19797({ value = 19797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19797, 'data-value': derived.doubled }, children);
}
export default Component19797;
