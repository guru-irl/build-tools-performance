import React from 'react';
const LABEL_6238 = 'component_6238';
export function Component6238({ value = 6238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6238, 'data-value': derived.doubled }, children);
}
export default Component6238;
