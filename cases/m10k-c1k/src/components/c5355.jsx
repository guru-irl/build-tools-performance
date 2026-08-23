import React from 'react';
const LABEL_5355 = 'component_5355';
export function Component5355({ value = 5355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5355, 'data-value': derived.doubled }, children);
}
export default Component5355;
