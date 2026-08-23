import React from 'react';
const LABEL_11737 = 'component_11737';
export function Component11737({ value = 11737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11737, 'data-value': derived.doubled }, children);
}
export default Component11737;
