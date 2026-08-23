import React from 'react';
const LABEL_6183 = 'component_6183';
export function Component6183({ value = 6183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6183, 'data-value': derived.doubled }, children);
}
export default Component6183;
