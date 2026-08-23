import React from 'react';
const LABEL_44422 = 'component_44422';
export function Component44422({ value = 44422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44422, 'data-value': derived.doubled }, children);
}
export default Component44422;
