import React from 'react';
const LABEL_7120 = 'component_7120';
export function Component7120({ value = 7120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7120, 'data-value': derived.doubled }, children);
}
export default Component7120;
