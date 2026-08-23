import React from 'react';
const LABEL_24270 = 'component_24270';
export function Component24270({ value = 24270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24270, 'data-value': derived.doubled }, children);
}
export default Component24270;
