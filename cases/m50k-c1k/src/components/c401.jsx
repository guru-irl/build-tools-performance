import React from 'react';
const LABEL_401 = 'component_401';
export function Component401({ value = 401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_401, 'data-value': derived.doubled }, children);
}
export default Component401;
