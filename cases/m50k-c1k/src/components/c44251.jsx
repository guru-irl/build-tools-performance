import React from 'react';
const LABEL_44251 = 'component_44251';
export function Component44251({ value = 44251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44251, 'data-value': derived.doubled }, children);
}
export default Component44251;
