import React from 'react';
const LABEL_6881 = 'component_6881';
export function Component6881({ value = 6881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6881, 'data-value': derived.doubled }, children);
}
export default Component6881;
