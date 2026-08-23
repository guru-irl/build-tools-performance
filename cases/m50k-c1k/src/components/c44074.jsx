import React from 'react';
const LABEL_44074 = 'component_44074';
export function Component44074({ value = 44074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44074, 'data-value': derived.doubled }, children);
}
export default Component44074;
