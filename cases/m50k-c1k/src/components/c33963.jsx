import React from 'react';
const LABEL_33963 = 'component_33963';
export function Component33963({ value = 33963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33963, 'data-value': derived.doubled }, children);
}
export default Component33963;
