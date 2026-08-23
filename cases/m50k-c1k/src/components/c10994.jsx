import React from 'react';
const LABEL_10994 = 'component_10994';
export function Component10994({ value = 10994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10994, 'data-value': derived.doubled }, children);
}
export default Component10994;
