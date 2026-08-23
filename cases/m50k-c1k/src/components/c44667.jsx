import React from 'react';
const LABEL_44667 = 'component_44667';
export function Component44667({ value = 44667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44667, 'data-value': derived.doubled }, children);
}
export default Component44667;
