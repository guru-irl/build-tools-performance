import React from 'react';
const LABEL_6015 = 'component_6015';
export function Component6015({ value = 6015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6015, 'data-value': derived.doubled }, children);
}
export default Component6015;
