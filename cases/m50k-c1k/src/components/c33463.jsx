import React from 'react';
const LABEL_33463 = 'component_33463';
export function Component33463({ value = 33463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33463, 'data-value': derived.doubled }, children);
}
export default Component33463;
