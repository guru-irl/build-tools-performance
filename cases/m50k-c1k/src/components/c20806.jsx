import React from 'react';
const LABEL_20806 = 'component_20806';
export function Component20806({ value = 20806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20806, 'data-value': derived.doubled }, children);
}
export default Component20806;
