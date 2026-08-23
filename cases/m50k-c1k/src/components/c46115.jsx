import React from 'react';
const LABEL_46115 = 'component_46115';
export function Component46115({ value = 46115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46115, 'data-value': derived.doubled }, children);
}
export default Component46115;
