import React from 'react';
const LABEL_6192 = 'component_6192';
export function Component6192({ value = 6192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6192, 'data-value': derived.doubled }, children);
}
export default Component6192;
