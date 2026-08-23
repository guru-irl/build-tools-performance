import React from 'react';
const LABEL_28996 = 'component_28996';
export function Component28996({ value = 28996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28996, 'data-value': derived.doubled }, children);
}
export default Component28996;
