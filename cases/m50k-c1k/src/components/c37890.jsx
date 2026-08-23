import React from 'react';
const LABEL_37890 = 'component_37890';
export function Component37890({ value = 37890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37890, 'data-value': derived.doubled }, children);
}
export default Component37890;
