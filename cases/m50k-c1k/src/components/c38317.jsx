import React from 'react';
const LABEL_38317 = 'component_38317';
export function Component38317({ value = 38317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38317, 'data-value': derived.doubled }, children);
}
export default Component38317;
