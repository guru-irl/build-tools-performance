import React from 'react';
const LABEL_45740 = 'component_45740';
export function Component45740({ value = 45740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45740, 'data-value': derived.doubled }, children);
}
export default Component45740;
