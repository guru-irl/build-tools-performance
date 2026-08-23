import React from 'react';
const LABEL_37961 = 'component_37961';
export function Component37961({ value = 37961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37961, 'data-value': derived.doubled }, children);
}
export default Component37961;
