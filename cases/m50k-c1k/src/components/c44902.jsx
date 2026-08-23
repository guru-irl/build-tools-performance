import React from 'react';
const LABEL_44902 = 'component_44902';
export function Component44902({ value = 44902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44902, 'data-value': derived.doubled }, children);
}
export default Component44902;
