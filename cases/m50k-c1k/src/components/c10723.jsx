import React from 'react';
const LABEL_10723 = 'component_10723';
export function Component10723({ value = 10723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10723, 'data-value': derived.doubled }, children);
}
export default Component10723;
