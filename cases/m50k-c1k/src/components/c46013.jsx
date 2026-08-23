import React from 'react';
const LABEL_46013 = 'component_46013';
export function Component46013({ value = 46013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46013, 'data-value': derived.doubled }, children);
}
export default Component46013;
