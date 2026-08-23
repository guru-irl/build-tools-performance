import React from 'react';
const LABEL_36963 = 'component_36963';
export function Component36963({ value = 36963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36963, 'data-value': derived.doubled }, children);
}
export default Component36963;
