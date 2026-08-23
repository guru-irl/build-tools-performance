import React from 'react';
const LABEL_7963 = 'component_7963';
export function Component7963({ value = 7963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7963, 'data-value': derived.doubled }, children);
}
export default Component7963;
