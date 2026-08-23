import React from 'react';
const LABEL_15963 = 'component_15963';
export function Component15963({ value = 15963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15963, 'data-value': derived.doubled }, children);
}
export default Component15963;
