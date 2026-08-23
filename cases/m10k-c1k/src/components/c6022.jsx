import React from 'react';
const LABEL_6022 = 'component_6022';
export function Component6022({ value = 6022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6022, 'data-value': derived.doubled }, children);
}
export default Component6022;
