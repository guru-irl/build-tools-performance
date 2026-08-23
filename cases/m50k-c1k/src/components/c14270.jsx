import React from 'react';
const LABEL_14270 = 'component_14270';
export function Component14270({ value = 14270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14270, 'data-value': derived.doubled }, children);
}
export default Component14270;
