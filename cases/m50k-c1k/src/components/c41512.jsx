import React from 'react';
const LABEL_41512 = 'component_41512';
export function Component41512({ value = 41512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41512, 'data-value': derived.doubled }, children);
}
export default Component41512;
