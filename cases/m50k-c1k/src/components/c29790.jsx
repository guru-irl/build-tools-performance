import React from 'react';
const LABEL_29790 = 'component_29790';
export function Component29790({ value = 29790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29790, 'data-value': derived.doubled }, children);
}
export default Component29790;
