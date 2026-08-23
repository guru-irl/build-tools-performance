import React from 'react';
const LABEL_6270 = 'component_6270';
export function Component6270({ value = 6270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6270, 'data-value': derived.doubled }, children);
}
export default Component6270;
