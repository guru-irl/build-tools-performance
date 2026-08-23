import React from 'react';
const LABEL_21903 = 'component_21903';
export function Component21903({ value = 21903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21903, 'data-value': derived.doubled }, children);
}
export default Component21903;
