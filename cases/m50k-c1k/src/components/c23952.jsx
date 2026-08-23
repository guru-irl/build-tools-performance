import React from 'react';
const LABEL_23952 = 'component_23952';
export function Component23952({ value = 23952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23952, 'data-value': derived.doubled }, children);
}
export default Component23952;
