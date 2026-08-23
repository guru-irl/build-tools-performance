import React from 'react';
const LABEL_24401 = 'component_24401';
export function Component24401({ value = 24401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24401, 'data-value': derived.doubled }, children);
}
export default Component24401;
