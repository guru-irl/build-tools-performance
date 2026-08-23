import React from 'react';
const LABEL_5544 = 'component_5544';
export function Component5544({ value = 5544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5544, 'data-value': derived.doubled }, children);
}
export default Component5544;
