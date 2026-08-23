import React from 'react';
const LABEL_46902 = 'component_46902';
export function Component46902({ value = 46902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46902, 'data-value': derived.doubled }, children);
}
export default Component46902;
