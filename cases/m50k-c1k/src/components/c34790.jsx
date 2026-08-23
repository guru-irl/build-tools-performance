import React from 'react';
const LABEL_34790 = 'component_34790';
export function Component34790({ value = 34790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34790, 'data-value': derived.doubled }, children);
}
export default Component34790;
