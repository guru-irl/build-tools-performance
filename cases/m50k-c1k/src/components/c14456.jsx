import React from 'react';
const LABEL_14456 = 'component_14456';
export function Component14456({ value = 14456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14456, 'data-value': derived.doubled }, children);
}
export default Component14456;
