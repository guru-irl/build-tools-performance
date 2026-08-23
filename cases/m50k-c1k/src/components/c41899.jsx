import React from 'react';
const LABEL_41899 = 'component_41899';
export function Component41899({ value = 41899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41899, 'data-value': derived.doubled }, children);
}
export default Component41899;
