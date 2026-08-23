import React from 'react';
const LABEL_25401 = 'component_25401';
export function Component25401({ value = 25401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25401, 'data-value': derived.doubled }, children);
}
export default Component25401;
