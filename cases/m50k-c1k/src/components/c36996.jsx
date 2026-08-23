import React from 'react';
const LABEL_36996 = 'component_36996';
export function Component36996({ value = 36996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36996, 'data-value': derived.doubled }, children);
}
export default Component36996;
