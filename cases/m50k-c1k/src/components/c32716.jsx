import React from 'react';
const LABEL_32716 = 'component_32716';
export function Component32716({ value = 32716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32716, 'data-value': derived.doubled }, children);
}
export default Component32716;
