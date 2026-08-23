import React from 'react';
const LABEL_10705 = 'component_10705';
export function Component10705({ value = 10705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10705, 'data-value': derived.doubled }, children);
}
export default Component10705;
