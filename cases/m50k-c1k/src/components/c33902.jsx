import React from 'react';
const LABEL_33902 = 'component_33902';
export function Component33902({ value = 33902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33902, 'data-value': derived.doubled }, children);
}
export default Component33902;
