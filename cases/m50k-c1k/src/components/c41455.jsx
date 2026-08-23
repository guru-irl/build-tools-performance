import React from 'react';
const LABEL_41455 = 'component_41455';
export function Component41455({ value = 41455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41455, 'data-value': derived.doubled }, children);
}
export default Component41455;
