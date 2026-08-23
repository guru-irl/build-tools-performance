import React from 'react';
const LABEL_14903 = 'component_14903';
export function Component14903({ value = 14903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14903, 'data-value': derived.doubled }, children);
}
export default Component14903;
