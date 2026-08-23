import React from 'react';
const LABEL_44618 = 'component_44618';
export function Component44618({ value = 44618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44618, 'data-value': derived.doubled }, children);
}
export default Component44618;
