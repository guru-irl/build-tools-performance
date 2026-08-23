import React from 'react';
const LABEL_41890 = 'component_41890';
export function Component41890({ value = 41890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41890, 'data-value': derived.doubled }, children);
}
export default Component41890;
