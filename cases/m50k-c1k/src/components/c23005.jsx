import React from 'react';
const LABEL_23005 = 'component_23005';
export function Component23005({ value = 23005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23005, 'data-value': derived.doubled }, children);
}
export default Component23005;
