import React from 'react';
const LABEL_44615 = 'component_44615';
export function Component44615({ value = 44615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44615, 'data-value': derived.doubled }, children);
}
export default Component44615;
