import React from 'react';
const LABEL_12618 = 'component_12618';
export function Component12618({ value = 12618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12618, 'data-value': derived.doubled }, children);
}
export default Component12618;
