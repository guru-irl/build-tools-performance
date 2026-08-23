import React from 'react';
const LABEL_11862 = 'component_11862';
export function Component11862({ value = 11862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11862, 'data-value': derived.doubled }, children);
}
export default Component11862;
