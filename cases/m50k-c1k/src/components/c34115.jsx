import React from 'react';
const LABEL_34115 = 'component_34115';
export function Component34115({ value = 34115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34115, 'data-value': derived.doubled }, children);
}
export default Component34115;
