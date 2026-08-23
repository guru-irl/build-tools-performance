import React from 'react';
const LABEL_23081 = 'component_23081';
export function Component23081({ value = 23081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23081, 'data-value': derived.doubled }, children);
}
export default Component23081;
