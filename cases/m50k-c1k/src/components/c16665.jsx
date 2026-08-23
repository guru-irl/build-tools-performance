import React from 'react';
const LABEL_16665 = 'component_16665';
export function Component16665({ value = 16665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16665, 'data-value': derived.doubled }, children);
}
export default Component16665;
