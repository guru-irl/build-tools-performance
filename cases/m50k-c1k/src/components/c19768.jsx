import React from 'react';
const LABEL_19768 = 'component_19768';
export function Component19768({ value = 19768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19768, 'data-value': derived.doubled }, children);
}
export default Component19768;
