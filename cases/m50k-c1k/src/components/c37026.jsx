import React from 'react';
const LABEL_37026 = 'component_37026';
export function Component37026({ value = 37026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37026, 'data-value': derived.doubled }, children);
}
export default Component37026;
