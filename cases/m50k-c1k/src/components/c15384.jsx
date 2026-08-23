import React from 'react';
const LABEL_15384 = 'component_15384';
export function Component15384({ value = 15384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15384, 'data-value': derived.doubled }, children);
}
export default Component15384;
