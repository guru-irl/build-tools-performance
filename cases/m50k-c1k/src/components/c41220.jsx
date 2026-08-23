import React from 'react';
const LABEL_41220 = 'component_41220';
export function Component41220({ value = 41220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41220, 'data-value': derived.doubled }, children);
}
export default Component41220;
