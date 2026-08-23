import React from 'react';
const LABEL_37328 = 'component_37328';
export function Component37328({ value = 37328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37328, 'data-value': derived.doubled }, children);
}
export default Component37328;
