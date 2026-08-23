import React from 'react';
const LABEL_41487 = 'component_41487';
export function Component41487({ value = 41487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41487, 'data-value': derived.doubled }, children);
}
export default Component41487;
