import React from 'react';
const LABEL_34913 = 'component_34913';
export function Component34913({ value = 34913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34913, 'data-value': derived.doubled }, children);
}
export default Component34913;
