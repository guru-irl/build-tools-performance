import React from 'react';
const LABEL_41305 = 'component_41305';
export function Component41305({ value = 41305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41305, 'data-value': derived.doubled }, children);
}
export default Component41305;
