import React from 'react';
const LABEL_6520 = 'component_6520';
export function Component6520({ value = 6520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6520, 'data-value': derived.doubled }, children);
}
export default Component6520;
