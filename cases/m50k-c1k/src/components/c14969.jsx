import React from 'react';
const LABEL_14969 = 'component_14969';
export function Component14969({ value = 14969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14969, 'data-value': derived.doubled }, children);
}
export default Component14969;
