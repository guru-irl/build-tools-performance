import React from 'react';
const LABEL_18270 = 'component_18270';
export function Component18270({ value = 18270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18270, 'data-value': derived.doubled }, children);
}
export default Component18270;
