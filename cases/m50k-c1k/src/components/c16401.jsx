import React from 'react';
const LABEL_16401 = 'component_16401';
export function Component16401({ value = 16401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16401, 'data-value': derived.doubled }, children);
}
export default Component16401;
