import React from 'react';
const LABEL_46005 = 'component_46005';
export function Component46005({ value = 46005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46005, 'data-value': derived.doubled }, children);
}
export default Component46005;
