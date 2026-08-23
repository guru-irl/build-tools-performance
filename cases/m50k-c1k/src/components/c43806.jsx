import React from 'react';
const LABEL_43806 = 'component_43806';
export function Component43806({ value = 43806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43806, 'data-value': derived.doubled }, children);
}
export default Component43806;
