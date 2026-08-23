import React from 'react';
const LABEL_36618 = 'component_36618';
export function Component36618({ value = 36618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36618, 'data-value': derived.doubled }, children);
}
export default Component36618;
