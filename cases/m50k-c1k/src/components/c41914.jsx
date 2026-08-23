import React from 'react';
const LABEL_41914 = 'component_41914';
export function Component41914({ value = 41914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41914, 'data-value': derived.doubled }, children);
}
export default Component41914;
