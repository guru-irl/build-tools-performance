import React from 'react';
const LABEL_44347 = 'component_44347';
export function Component44347({ value = 44347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44347, 'data-value': derived.doubled }, children);
}
export default Component44347;
