import React from 'react';
const LABEL_14952 = 'component_14952';
export function Component14952({ value = 14952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14952, 'data-value': derived.doubled }, children);
}
export default Component14952;
