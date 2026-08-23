import React from 'react';
const LABEL_40994 = 'component_40994';
export function Component40994({ value = 40994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40994, 'data-value': derived.doubled }, children);
}
export default Component40994;
