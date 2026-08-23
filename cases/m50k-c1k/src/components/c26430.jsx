import React from 'react';
const LABEL_26430 = 'component_26430';
export function Component26430({ value = 26430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26430, 'data-value': derived.doubled }, children);
}
export default Component26430;
