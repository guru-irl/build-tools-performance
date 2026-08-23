import React from 'react';
const LABEL_33295 = 'component_33295';
export function Component33295({ value = 33295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33295, 'data-value': derived.doubled }, children);
}
export default Component33295;
