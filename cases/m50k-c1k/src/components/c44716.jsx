import React from 'react';
const LABEL_44716 = 'component_44716';
export function Component44716({ value = 44716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44716, 'data-value': derived.doubled }, children);
}
export default Component44716;
