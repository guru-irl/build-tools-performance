import React from 'react';
const LABEL_24618 = 'component_24618';
export function Component24618({ value = 24618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24618, 'data-value': derived.doubled }, children);
}
export default Component24618;
