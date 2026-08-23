import React from 'react';
const LABEL_8567 = 'component_8567';
export function Component8567({ value = 8567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8567, 'data-value': derived.doubled }, children);
}
export default Component8567;
