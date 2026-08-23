import React from 'react';
const LABEL_44300 = 'component_44300';
export function Component44300({ value = 44300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44300, 'data-value': derived.doubled }, children);
}
export default Component44300;
