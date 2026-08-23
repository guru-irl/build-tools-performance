import React from 'react';
const LABEL_16506 = 'component_16506';
export function Component16506({ value = 16506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16506, 'data-value': derived.doubled }, children);
}
export default Component16506;
