import React from 'react';
const LABEL_37424 = 'component_37424';
export function Component37424({ value = 37424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37424, 'data-value': derived.doubled }, children);
}
export default Component37424;
