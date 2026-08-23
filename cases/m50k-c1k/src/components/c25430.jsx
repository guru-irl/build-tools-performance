import React from 'react';
const LABEL_25430 = 'component_25430';
export function Component25430({ value = 25430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25430, 'data-value': derived.doubled }, children);
}
export default Component25430;
