import React from 'react';
const LABEL_37660 = 'component_37660';
export function Component37660({ value = 37660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37660, 'data-value': derived.doubled }, children);
}
export default Component37660;
