import React from 'react';
const LABEL_45553 = 'component_45553';
export function Component45553({ value = 45553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45553, 'data-value': derived.doubled }, children);
}
export default Component45553;
