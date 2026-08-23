import React from 'react';
const LABEL_33737 = 'component_33737';
export function Component33737({ value = 33737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33737, 'data-value': derived.doubled }, children);
}
export default Component33737;
