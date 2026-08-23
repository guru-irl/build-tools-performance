import React from 'react';
const LABEL_13618 = 'component_13618';
export function Component13618({ value = 13618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13618, 'data-value': derived.doubled }, children);
}
export default Component13618;
