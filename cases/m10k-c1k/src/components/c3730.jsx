import React from 'react';
const LABEL_3730 = 'component_3730';
export function Component3730({ value = 3730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3730, 'data-value': derived.doubled }, children);
}
export default Component3730;
