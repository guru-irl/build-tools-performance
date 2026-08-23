import React from 'react';
const LABEL_37041 = 'component_37041';
export function Component37041({ value = 37041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37041, 'data-value': derived.doubled }, children);
}
export default Component37041;
