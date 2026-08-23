import React from 'react';
const LABEL_41233 = 'component_41233';
export function Component41233({ value = 41233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41233, 'data-value': derived.doubled }, children);
}
export default Component41233;
