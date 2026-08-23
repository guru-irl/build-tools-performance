import React from 'react';
const LABEL_3771 = 'component_3771';
export function Component3771({ value = 3771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3771, 'data-value': derived.doubled }, children);
}
export default Component3771;
