import React from 'react';
const LABEL_40430 = 'component_40430';
export function Component40430({ value = 40430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40430, 'data-value': derived.doubled }, children);
}
export default Component40430;
