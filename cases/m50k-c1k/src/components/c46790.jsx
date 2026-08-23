import React from 'react';
const LABEL_46790 = 'component_46790';
export function Component46790({ value = 46790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46790, 'data-value': derived.doubled }, children);
}
export default Component46790;
