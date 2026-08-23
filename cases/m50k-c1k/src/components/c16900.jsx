import React from 'react';
const LABEL_16900 = 'component_16900';
export function Component16900({ value = 16900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16900, 'data-value': derived.doubled }, children);
}
export default Component16900;
