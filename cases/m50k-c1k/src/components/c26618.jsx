import React from 'react';
const LABEL_26618 = 'component_26618';
export function Component26618({ value = 26618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26618, 'data-value': derived.doubled }, children);
}
export default Component26618;
