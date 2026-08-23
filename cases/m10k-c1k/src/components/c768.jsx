import React from 'react';
const LABEL_768 = 'component_768';
export function Component768({ value = 768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_768, 'data-value': derived.doubled }, children);
}
export default Component768;
