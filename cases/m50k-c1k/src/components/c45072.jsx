import React from 'react';
const LABEL_45072 = 'component_45072';
export function Component45072({ value = 45072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45072, 'data-value': derived.doubled }, children);
}
export default Component45072;
