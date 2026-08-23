import React from 'react';
const LABEL_25412 = 'component_25412';
export function Component25412({ value = 25412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25412, 'data-value': derived.doubled }, children);
}
export default Component25412;
