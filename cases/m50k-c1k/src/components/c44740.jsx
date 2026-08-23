import React from 'react';
const LABEL_44740 = 'component_44740';
export function Component44740({ value = 44740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44740, 'data-value': derived.doubled }, children);
}
export default Component44740;
