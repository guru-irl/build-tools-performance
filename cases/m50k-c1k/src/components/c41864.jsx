import React from 'react';
const LABEL_41864 = 'component_41864';
export function Component41864({ value = 41864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41864, 'data-value': derived.doubled }, children);
}
export default Component41864;
