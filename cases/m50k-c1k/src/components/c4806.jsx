import React from 'react';
const LABEL_4806 = 'component_4806';
export function Component4806({ value = 4806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4806, 'data-value': derived.doubled }, children);
}
export default Component4806;
