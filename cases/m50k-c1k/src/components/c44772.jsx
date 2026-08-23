import React from 'react';
const LABEL_44772 = 'component_44772';
export function Component44772({ value = 44772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44772, 'data-value': derived.doubled }, children);
}
export default Component44772;
