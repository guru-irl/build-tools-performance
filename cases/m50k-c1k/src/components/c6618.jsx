import React from 'react';
const LABEL_6618 = 'component_6618';
export function Component6618({ value = 6618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6618, 'data-value': derived.doubled }, children);
}
export default Component6618;
