import React from 'react';
const LABEL_14648 = 'component_14648';
export function Component14648({ value = 14648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14648, 'data-value': derived.doubled }, children);
}
export default Component14648;
