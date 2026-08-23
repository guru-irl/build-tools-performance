import React from 'react';
const LABEL_12775 = 'component_12775';
export function Component12775({ value = 12775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12775, 'data-value': derived.doubled }, children);
}
export default Component12775;
