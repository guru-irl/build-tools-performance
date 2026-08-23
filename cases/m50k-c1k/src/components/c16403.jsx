import React from 'react';
const LABEL_16403 = 'component_16403';
export function Component16403({ value = 16403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16403, 'data-value': derived.doubled }, children);
}
export default Component16403;
