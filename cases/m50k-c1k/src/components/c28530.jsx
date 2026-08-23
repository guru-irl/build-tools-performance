import React from 'react';
const LABEL_28530 = 'component_28530';
export function Component28530({ value = 28530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28530, 'data-value': derived.doubled }, children);
}
export default Component28530;
