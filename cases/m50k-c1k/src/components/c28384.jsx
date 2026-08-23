import React from 'react';
const LABEL_28384 = 'component_28384';
export function Component28384({ value = 28384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28384, 'data-value': derived.doubled }, children);
}
export default Component28384;
