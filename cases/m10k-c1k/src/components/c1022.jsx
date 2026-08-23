import React from 'react';
const LABEL_1022 = 'component_1022';
export function Component1022({ value = 1022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1022, 'data-value': derived.doubled }, children);
}
export default Component1022;
