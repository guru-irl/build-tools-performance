import React from 'react';
const LABEL_13013 = 'component_13013';
export function Component13013({ value = 13013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13013, 'data-value': derived.doubled }, children);
}
export default Component13013;
