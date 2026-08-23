import React from 'react';
const LABEL_33567 = 'component_33567';
export function Component33567({ value = 33567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33567, 'data-value': derived.doubled }, children);
}
export default Component33567;
