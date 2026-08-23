import React from 'react';
const LABEL_37011 = 'component_37011';
export function Component37011({ value = 37011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37011, 'data-value': derived.doubled }, children);
}
export default Component37011;
