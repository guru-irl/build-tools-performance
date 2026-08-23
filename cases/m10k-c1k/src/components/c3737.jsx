import React from 'react';
const LABEL_3737 = 'component_3737';
export function Component3737({ value = 3737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3737, 'data-value': derived.doubled }, children);
}
export default Component3737;
