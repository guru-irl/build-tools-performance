import React from 'react';
const LABEL_41124 = 'component_41124';
export function Component41124({ value = 41124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41124, 'data-value': derived.doubled }, children);
}
export default Component41124;
