import React from 'react';
const LABEL_44057 = 'component_44057';
export function Component44057({ value = 44057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44057, 'data-value': derived.doubled }, children);
}
export default Component44057;
