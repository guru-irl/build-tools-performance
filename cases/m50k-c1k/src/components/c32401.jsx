import React from 'react';
const LABEL_32401 = 'component_32401';
export function Component32401({ value = 32401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32401, 'data-value': derived.doubled }, children);
}
export default Component32401;
