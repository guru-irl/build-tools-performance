import React from 'react';
const LABEL_946 = 'component_946';
export function Component946({ value = 946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_946, 'data-value': derived.doubled }, children);
}
export default Component946;
