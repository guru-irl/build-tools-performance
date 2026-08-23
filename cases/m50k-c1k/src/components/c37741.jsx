import React from 'react';
const LABEL_37741 = 'component_37741';
export function Component37741({ value = 37741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37741, 'data-value': derived.doubled }, children);
}
export default Component37741;
