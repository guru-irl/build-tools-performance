import React from 'react';
const LABEL_24806 = 'component_24806';
export function Component24806({ value = 24806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24806, 'data-value': derived.doubled }, children);
}
export default Component24806;
