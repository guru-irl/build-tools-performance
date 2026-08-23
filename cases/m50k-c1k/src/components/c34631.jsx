import React from 'react';
const LABEL_34631 = 'component_34631';
export function Component34631({ value = 34631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34631, 'data-value': derived.doubled }, children);
}
export default Component34631;
