import React from 'react';
const LABEL_25005 = 'component_25005';
export function Component25005({ value = 25005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25005, 'data-value': derived.doubled }, children);
}
export default Component25005;
