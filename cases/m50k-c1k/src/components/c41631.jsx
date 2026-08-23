import React from 'react';
const LABEL_41631 = 'component_41631';
export function Component41631({ value = 41631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41631, 'data-value': derived.doubled }, children);
}
export default Component41631;
