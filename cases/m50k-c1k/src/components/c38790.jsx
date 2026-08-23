import React from 'react';
const LABEL_38790 = 'component_38790';
export function Component38790({ value = 38790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38790, 'data-value': derived.doubled }, children);
}
export default Component38790;
