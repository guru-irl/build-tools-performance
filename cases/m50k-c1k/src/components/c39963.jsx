import React from 'react';
const LABEL_39963 = 'component_39963';
export function Component39963({ value = 39963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39963, 'data-value': derived.doubled }, children);
}
export default Component39963;
