import React from 'react';
const LABEL_37040 = 'component_37040';
export function Component37040({ value = 37040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37040, 'data-value': derived.doubled }, children);
}
export default Component37040;
