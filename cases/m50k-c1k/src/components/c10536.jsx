import React from 'react';
const LABEL_10536 = 'component_10536';
export function Component10536({ value = 10536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10536, 'data-value': derived.doubled }, children);
}
export default Component10536;
