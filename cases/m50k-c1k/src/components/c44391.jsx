import React from 'react';
const LABEL_44391 = 'component_44391';
export function Component44391({ value = 44391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44391, 'data-value': derived.doubled }, children);
}
export default Component44391;
