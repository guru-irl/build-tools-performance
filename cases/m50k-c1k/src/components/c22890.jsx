import React from 'react';
const LABEL_22890 = 'component_22890';
export function Component22890({ value = 22890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22890, 'data-value': derived.doubled }, children);
}
export default Component22890;
