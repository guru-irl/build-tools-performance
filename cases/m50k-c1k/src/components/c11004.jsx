import React from 'react';
const LABEL_11004 = 'component_11004';
export function Component11004({ value = 11004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11004, 'data-value': derived.doubled }, children);
}
export default Component11004;
