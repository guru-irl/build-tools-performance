import React from 'react';
const LABEL_23881 = 'component_23881';
export function Component23881({ value = 23881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23881, 'data-value': derived.doubled }, children);
}
export default Component23881;
