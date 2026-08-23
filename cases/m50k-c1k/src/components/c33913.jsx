import React from 'react';
const LABEL_33913 = 'component_33913';
export function Component33913({ value = 33913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33913, 'data-value': derived.doubled }, children);
}
export default Component33913;
