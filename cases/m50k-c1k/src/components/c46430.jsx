import React from 'react';
const LABEL_46430 = 'component_46430';
export function Component46430({ value = 46430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46430, 'data-value': derived.doubled }, children);
}
export default Component46430;
