import React from 'react';
const LABEL_44090 = 'component_44090';
export function Component44090({ value = 44090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44090, 'data-value': derived.doubled }, children);
}
export default Component44090;
