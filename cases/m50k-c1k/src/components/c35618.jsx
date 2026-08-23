import React from 'react';
const LABEL_35618 = 'component_35618';
export function Component35618({ value = 35618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35618, 'data-value': derived.doubled }, children);
}
export default Component35618;
