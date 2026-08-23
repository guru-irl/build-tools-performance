import React from 'react';
const LABEL_38821 = 'component_38821';
export function Component38821({ value = 38821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38821, 'data-value': derived.doubled }, children);
}
export default Component38821;
