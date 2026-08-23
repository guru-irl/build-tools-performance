import React from 'react';
const LABEL_8659 = 'component_8659';
export function Component8659({ value = 8659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8659, 'data-value': derived.doubled }, children);
}
export default Component8659;
