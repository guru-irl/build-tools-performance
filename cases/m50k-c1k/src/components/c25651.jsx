import React from 'react';
const LABEL_25651 = 'component_25651';
export function Component25651({ value = 25651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25651, 'data-value': derived.doubled }, children);
}
export default Component25651;
