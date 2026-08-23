import React from 'react';
const LABEL_12996 = 'component_12996';
export function Component12996({ value = 12996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12996, 'data-value': derived.doubled }, children);
}
export default Component12996;
