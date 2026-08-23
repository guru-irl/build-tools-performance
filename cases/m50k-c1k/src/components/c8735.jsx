import React from 'react';
const LABEL_8735 = 'component_8735';
export function Component8735({ value = 8735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8735, 'data-value': derived.doubled }, children);
}
export default Component8735;
