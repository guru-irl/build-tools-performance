import React from 'react';
const LABEL_35270 = 'component_35270';
export function Component35270({ value = 35270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35270, 'data-value': derived.doubled }, children);
}
export default Component35270;
