import React from 'react';
const LABEL_41482 = 'component_41482';
export function Component41482({ value = 41482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41482, 'data-value': derived.doubled }, children);
}
export default Component41482;
