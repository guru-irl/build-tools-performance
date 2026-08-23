import React from 'react';
const LABEL_4210 = 'component_4210';
export function Component4210({ value = 4210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4210, 'data-value': derived.doubled }, children);
}
export default Component4210;
