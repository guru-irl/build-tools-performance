import React from 'react';
const LABEL_34618 = 'component_34618';
export function Component34618({ value = 34618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34618, 'data-value': derived.doubled }, children);
}
export default Component34618;
