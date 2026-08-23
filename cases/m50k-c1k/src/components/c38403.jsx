import React from 'react';
const LABEL_38403 = 'component_38403';
export function Component38403({ value = 38403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38403, 'data-value': derived.doubled }, children);
}
export default Component38403;
