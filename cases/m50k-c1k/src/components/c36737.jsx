import React from 'react';
const LABEL_36737 = 'component_36737';
export function Component36737({ value = 36737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36737, 'data-value': derived.doubled }, children);
}
export default Component36737;
