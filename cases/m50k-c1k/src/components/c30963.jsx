import React from 'react';
const LABEL_30963 = 'component_30963';
export function Component30963({ value = 30963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30963, 'data-value': derived.doubled }, children);
}
export default Component30963;
