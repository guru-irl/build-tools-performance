import React from 'react';
const LABEL_33035 = 'component_33035';
export function Component33035({ value = 33035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33035, 'data-value': derived.doubled }, children);
}
export default Component33035;
