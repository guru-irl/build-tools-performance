import React from 'react';
const LABEL_44835 = 'component_44835';
export function Component44835({ value = 44835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44835, 'data-value': derived.doubled }, children);
}
export default Component44835;
