import React from 'react';
const LABEL_41206 = 'component_41206';
export function Component41206({ value = 41206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41206, 'data-value': derived.doubled }, children);
}
export default Component41206;
