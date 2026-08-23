import React from 'react';
const LABEL_23302 = 'component_23302';
export function Component23302({ value = 23302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23302, 'data-value': derived.doubled }, children);
}
export default Component23302;
