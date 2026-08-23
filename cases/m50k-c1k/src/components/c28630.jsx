import React from 'react';
const LABEL_28630 = 'component_28630';
export function Component28630({ value = 28630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28630, 'data-value': derived.doubled }, children);
}
export default Component28630;
