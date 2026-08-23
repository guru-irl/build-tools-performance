import React from 'react';
const LABEL_5790 = 'component_5790';
export function Component5790({ value = 5790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5790, 'data-value': derived.doubled }, children);
}
export default Component5790;
