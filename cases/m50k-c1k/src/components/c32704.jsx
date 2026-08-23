import React from 'react';
const LABEL_32704 = 'component_32704';
export function Component32704({ value = 32704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32704, 'data-value': derived.doubled }, children);
}
export default Component32704;
