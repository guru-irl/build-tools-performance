import React from 'react';
const LABEL_38536 = 'component_38536';
export function Component38536({ value = 38536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38536, 'data-value': derived.doubled }, children);
}
export default Component38536;
