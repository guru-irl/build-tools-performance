import React from 'react';
const LABEL_14020 = 'component_14020';
export function Component14020({ value = 14020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14020, 'data-value': derived.doubled }, children);
}
export default Component14020;
