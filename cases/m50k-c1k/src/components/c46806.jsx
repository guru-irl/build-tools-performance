import React from 'react';
const LABEL_46806 = 'component_46806';
export function Component46806({ value = 46806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46806, 'data-value': derived.doubled }, children);
}
export default Component46806;
