import React from 'react';
const LABEL_16790 = 'component_16790';
export function Component16790({ value = 16790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16790, 'data-value': derived.doubled }, children);
}
export default Component16790;
