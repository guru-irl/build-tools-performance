import React from 'react';
const LABEL_5076 = 'component_5076';
export function Component5076({ value = 5076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5076, 'data-value': derived.doubled }, children);
}
export default Component5076;
