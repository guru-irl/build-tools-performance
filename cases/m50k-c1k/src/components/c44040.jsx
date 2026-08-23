import React from 'react';
const LABEL_44040 = 'component_44040';
export function Component44040({ value = 44040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44040, 'data-value': derived.doubled }, children);
}
export default Component44040;
