import React from 'react';
const LABEL_30158 = 'component_30158';
export function Component30158({ value = 30158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30158, 'data-value': derived.doubled }, children);
}
export default Component30158;
