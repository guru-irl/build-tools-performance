import React from 'react';
const LABEL_32013 = 'component_32013';
export function Component32013({ value = 32013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32013, 'data-value': derived.doubled }, children);
}
export default Component32013;
