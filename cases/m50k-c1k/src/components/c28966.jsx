import React from 'react';
const LABEL_28966 = 'component_28966';
export function Component28966({ value = 28966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28966, 'data-value': derived.doubled }, children);
}
export default Component28966;
