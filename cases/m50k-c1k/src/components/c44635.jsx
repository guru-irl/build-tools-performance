import React from 'react';
const LABEL_44635 = 'component_44635';
export function Component44635({ value = 44635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44635, 'data-value': derived.doubled }, children);
}
export default Component44635;
