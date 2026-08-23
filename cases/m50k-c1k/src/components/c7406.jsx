import React from 'react';
const LABEL_7406 = 'component_7406';
export function Component7406({ value = 7406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7406, 'data-value': derived.doubled }, children);
}
export default Component7406;
