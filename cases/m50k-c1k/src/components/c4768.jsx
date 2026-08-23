import React from 'react';
const LABEL_4768 = 'component_4768';
export function Component4768({ value = 4768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4768, 'data-value': derived.doubled }, children);
}
export default Component4768;
