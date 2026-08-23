import React from 'react';
const LABEL_14077 = 'component_14077';
export function Component14077({ value = 14077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14077, 'data-value': derived.doubled }, children);
}
export default Component14077;
