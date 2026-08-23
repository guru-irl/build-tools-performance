import React from 'react';
const LABEL_26802 = 'component_26802';
export function Component26802({ value = 26802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26802, 'data-value': derived.doubled }, children);
}
export default Component26802;
