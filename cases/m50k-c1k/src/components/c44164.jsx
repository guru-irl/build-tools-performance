import React from 'react';
const LABEL_44164 = 'component_44164';
export function Component44164({ value = 44164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44164, 'data-value': derived.doubled }, children);
}
export default Component44164;
