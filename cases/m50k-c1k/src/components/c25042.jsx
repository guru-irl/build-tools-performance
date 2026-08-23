import React from 'react';
const LABEL_25042 = 'component_25042';
export function Component25042({ value = 25042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25042, 'data-value': derived.doubled }, children);
}
export default Component25042;
