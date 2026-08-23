import React from 'react';
const LABEL_6994 = 'component_6994';
export function Component6994({ value = 6994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6994, 'data-value': derived.doubled }, children);
}
export default Component6994;
