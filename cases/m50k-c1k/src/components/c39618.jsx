import React from 'react';
const LABEL_39618 = 'component_39618';
export function Component39618({ value = 39618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39618, 'data-value': derived.doubled }, children);
}
export default Component39618;
