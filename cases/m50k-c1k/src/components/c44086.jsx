import React from 'react';
const LABEL_44086 = 'component_44086';
export function Component44086({ value = 44086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44086, 'data-value': derived.doubled }, children);
}
export default Component44086;
