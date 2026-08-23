import React from 'react';
const LABEL_14768 = 'component_14768';
export function Component14768({ value = 14768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14768, 'data-value': derived.doubled }, children);
}
export default Component14768;
