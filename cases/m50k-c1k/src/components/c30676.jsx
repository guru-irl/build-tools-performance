import React from 'react';
const LABEL_30676 = 'component_30676';
export function Component30676({ value = 30676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30676, 'data-value': derived.doubled }, children);
}
export default Component30676;
