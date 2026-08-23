import React from 'react';
const LABEL_39994 = 'component_39994';
export function Component39994({ value = 39994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39994, 'data-value': derived.doubled }, children);
}
export default Component39994;
