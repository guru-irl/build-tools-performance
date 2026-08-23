import React from 'react';
const LABEL_25403 = 'component_25403';
export function Component25403({ value = 25403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25403, 'data-value': derived.doubled }, children);
}
export default Component25403;
