import React from 'react';
const LABEL_20963 = 'component_20963';
export function Component20963({ value = 20963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20963, 'data-value': derived.doubled }, children);
}
export default Component20963;
