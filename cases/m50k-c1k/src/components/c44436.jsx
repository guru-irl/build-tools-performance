import React from 'react';
const LABEL_44436 = 'component_44436';
export function Component44436({ value = 44436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44436, 'data-value': derived.doubled }, children);
}
export default Component44436;
