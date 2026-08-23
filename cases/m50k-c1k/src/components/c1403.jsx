import React from 'react';
const LABEL_1403 = 'component_1403';
export function Component1403({ value = 1403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1403, 'data-value': derived.doubled }, children);
}
export default Component1403;
