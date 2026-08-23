import React from 'react';
const LABEL_3618 = 'component_3618';
export function Component3618({ value = 3618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3618, 'data-value': derived.doubled }, children);
}
export default Component3618;
