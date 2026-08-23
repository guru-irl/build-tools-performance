import React from 'react';
const LABEL_18115 = 'component_18115';
export function Component18115({ value = 18115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18115, 'data-value': derived.doubled }, children);
}
export default Component18115;
