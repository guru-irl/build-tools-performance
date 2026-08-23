import React from 'react';
const LABEL_37641 = 'component_37641';
export function Component37641({ value = 37641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37641, 'data-value': derived.doubled }, children);
}
export default Component37641;
