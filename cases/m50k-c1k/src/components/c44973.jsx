import React from 'react';
const LABEL_44973 = 'component_44973';
export function Component44973({ value = 44973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44973, 'data-value': derived.doubled }, children);
}
export default Component44973;
