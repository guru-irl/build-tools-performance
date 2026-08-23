import React from 'react';
const LABEL_13755 = 'component_13755';
export function Component13755({ value = 13755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13755, 'data-value': derived.doubled }, children);
}
export default Component13755;
