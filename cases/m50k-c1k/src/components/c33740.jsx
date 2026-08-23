import React from 'react';
const LABEL_33740 = 'component_33740';
export function Component33740({ value = 33740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33740, 'data-value': derived.doubled }, children);
}
export default Component33740;
