import React from 'react';
const LABEL_16270 = 'component_16270';
export function Component16270({ value = 16270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16270, 'data-value': derived.doubled }, children);
}
export default Component16270;
