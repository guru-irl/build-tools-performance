import React from 'react';
const LABEL_41044 = 'component_41044';
export function Component41044({ value = 41044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41044, 'data-value': derived.doubled }, children);
}
export default Component41044;
