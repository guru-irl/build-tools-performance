import React from 'react';
const LABEL_26302 = 'component_26302';
export function Component26302({ value = 26302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26302, 'data-value': derived.doubled }, children);
}
export default Component26302;
