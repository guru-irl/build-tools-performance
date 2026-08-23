import React from 'react';
const LABEL_5531 = 'component_5531';
export function Component5531({ value = 5531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5531, 'data-value': derived.doubled }, children);
}
export default Component5531;
