import React from 'react';
const LABEL_192 = 'component_192';
export function Component192({ value = 192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_192, 'data-value': derived.doubled }, children);
}
export default Component192;
