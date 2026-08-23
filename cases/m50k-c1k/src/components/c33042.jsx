import React from 'react';
const LABEL_33042 = 'component_33042';
export function Component33042({ value = 33042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33042, 'data-value': derived.doubled }, children);
}
export default Component33042;
