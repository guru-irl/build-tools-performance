import React from 'react';
const LABEL_29401 = 'component_29401';
export function Component29401({ value = 29401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29401, 'data-value': derived.doubled }, children);
}
export default Component29401;
