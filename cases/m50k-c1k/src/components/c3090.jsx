import React from 'react';
const LABEL_3090 = 'component_3090';
export function Component3090({ value = 3090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3090, 'data-value': derived.doubled }, children);
}
export default Component3090;
