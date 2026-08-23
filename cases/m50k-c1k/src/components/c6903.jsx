import React from 'react';
const LABEL_6903 = 'component_6903';
export function Component6903({ value = 6903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6903, 'data-value': derived.doubled }, children);
}
export default Component6903;
