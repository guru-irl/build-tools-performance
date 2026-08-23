import React from 'react';
const LABEL_44913 = 'component_44913';
export function Component44913({ value = 44913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44913, 'data-value': derived.doubled }, children);
}
export default Component44913;
