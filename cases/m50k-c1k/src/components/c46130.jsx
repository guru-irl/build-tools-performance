import React from 'react';
const LABEL_46130 = 'component_46130';
export function Component46130({ value = 46130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46130, 'data-value': derived.doubled }, children);
}
export default Component46130;
