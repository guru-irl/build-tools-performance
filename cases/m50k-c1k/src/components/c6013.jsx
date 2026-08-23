import React from 'react';
const LABEL_6013 = 'component_6013';
export function Component6013({ value = 6013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6013, 'data-value': derived.doubled }, children);
}
export default Component6013;
