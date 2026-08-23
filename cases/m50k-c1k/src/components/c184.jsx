import React from 'react';
const LABEL_184 = 'component_184';
export function Component184({ value = 184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_184, 'data-value': derived.doubled }, children);
}
export default Component184;
