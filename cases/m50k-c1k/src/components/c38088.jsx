import React from 'react';
const LABEL_38088 = 'component_38088';
export function Component38088({ value = 38088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38088, 'data-value': derived.doubled }, children);
}
export default Component38088;
