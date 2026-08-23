import React from 'react';
const LABEL_30410 = 'component_30410';
export function Component30410({ value = 30410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30410, 'data-value': derived.doubled }, children);
}
export default Component30410;
