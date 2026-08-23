import React from 'react';
const LABEL_37002 = 'component_37002';
export function Component37002({ value = 37002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37002, 'data-value': derived.doubled }, children);
}
export default Component37002;
