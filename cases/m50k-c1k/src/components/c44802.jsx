import React from 'react';
const LABEL_44802 = 'component_44802';
export function Component44802({ value = 44802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44802, 'data-value': derived.doubled }, children);
}
export default Component44802;
