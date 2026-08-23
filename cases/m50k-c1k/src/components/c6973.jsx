import React from 'react';
const LABEL_6973 = 'component_6973';
export function Component6973({ value = 6973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6973, 'data-value': derived.doubled }, children);
}
export default Component6973;
