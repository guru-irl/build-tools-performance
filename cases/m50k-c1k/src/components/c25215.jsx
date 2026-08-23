import React from 'react';
const LABEL_25215 = 'component_25215';
export function Component25215({ value = 25215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25215, 'data-value': derived.doubled }, children);
}
export default Component25215;
