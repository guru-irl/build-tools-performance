import React from 'react';
const LABEL_18963 = 'component_18963';
export function Component18963({ value = 18963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18963, 'data-value': derived.doubled }, children);
}
export default Component18963;
