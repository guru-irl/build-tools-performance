import React from 'react';
const LABEL_23963 = 'component_23963';
export function Component23963({ value = 23963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23963, 'data-value': derived.doubled }, children);
}
export default Component23963;
