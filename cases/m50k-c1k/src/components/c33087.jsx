import React from 'react';
const LABEL_33087 = 'component_33087';
export function Component33087({ value = 33087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33087, 'data-value': derived.doubled }, children);
}
export default Component33087;
