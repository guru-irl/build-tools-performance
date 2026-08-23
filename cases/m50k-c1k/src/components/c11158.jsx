import React from 'react';
const LABEL_11158 = 'component_11158';
export function Component11158({ value = 11158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11158, 'data-value': derived.doubled }, children);
}
export default Component11158;
