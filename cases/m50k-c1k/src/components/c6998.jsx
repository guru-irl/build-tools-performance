import React from 'react';
const LABEL_6998 = 'component_6998';
export function Component6998({ value = 6998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6998, 'data-value': derived.doubled }, children);
}
export default Component6998;
