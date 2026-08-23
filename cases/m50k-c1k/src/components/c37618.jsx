import React from 'react';
const LABEL_37618 = 'component_37618';
export function Component37618({ value = 37618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37618, 'data-value': derived.doubled }, children);
}
export default Component37618;
