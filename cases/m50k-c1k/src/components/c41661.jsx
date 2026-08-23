import React from 'react';
const LABEL_41661 = 'component_41661';
export function Component41661({ value = 41661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41661, 'data-value': derived.doubled }, children);
}
export default Component41661;
