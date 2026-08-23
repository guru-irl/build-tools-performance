import React from 'react';
const LABEL_19864 = 'component_19864';
export function Component19864({ value = 19864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19864, 'data-value': derived.doubled }, children);
}
export default Component19864;
