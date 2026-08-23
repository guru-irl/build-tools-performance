import React from 'react';
const LABEL_16806 = 'component_16806';
export function Component16806({ value = 16806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16806, 'data-value': derived.doubled }, children);
}
export default Component16806;
