import React from 'react';
const LABEL_6029 = 'component_6029';
export function Component6029({ value = 6029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6029, 'data-value': derived.doubled }, children);
}
export default Component6029;
