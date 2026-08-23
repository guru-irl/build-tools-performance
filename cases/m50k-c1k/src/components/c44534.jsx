import React from 'react';
const LABEL_44534 = 'component_44534';
export function Component44534({ value = 44534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44534, 'data-value': derived.doubled }, children);
}
export default Component44534;
