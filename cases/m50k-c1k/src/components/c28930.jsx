import React from 'react';
const LABEL_28930 = 'component_28930';
export function Component28930({ value = 28930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28930, 'data-value': derived.doubled }, children);
}
export default Component28930;
