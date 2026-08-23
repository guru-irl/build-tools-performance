import React from 'react';
const LABEL_8179 = 'component_8179';
export function Component8179({ value = 8179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8179, 'data-value': derived.doubled }, children);
}
export default Component8179;
