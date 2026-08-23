import React from 'react';
const LABEL_5882 = 'component_5882';
export function Component5882({ value = 5882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5882, 'data-value': derived.doubled }, children);
}
export default Component5882;
