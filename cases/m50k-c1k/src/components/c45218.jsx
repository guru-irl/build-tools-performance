import React from 'react';
const LABEL_45218 = 'component_45218';
export function Component45218({ value = 45218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45218, 'data-value': derived.doubled }, children);
}
export default Component45218;
