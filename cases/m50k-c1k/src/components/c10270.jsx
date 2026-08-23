import React from 'react';
const LABEL_10270 = 'component_10270';
export function Component10270({ value = 10270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10270, 'data-value': derived.doubled }, children);
}
export default Component10270;
