import React from 'react';
const LABEL_33661 = 'component_33661';
export function Component33661({ value = 33661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33661, 'data-value': derived.doubled }, children);
}
export default Component33661;
