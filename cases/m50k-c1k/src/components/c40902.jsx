import React from 'react';
const LABEL_40902 = 'component_40902';
export function Component40902({ value = 40902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40902, 'data-value': derived.doubled }, children);
}
export default Component40902;
