import React from 'react';
const LABEL_41747 = 'component_41747';
export function Component41747({ value = 41747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41747, 'data-value': derived.doubled }, children);
}
export default Component41747;
