import React from 'react';
const LABEL_16075 = 'component_16075';
export function Component16075({ value = 16075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16075, 'data-value': derived.doubled }, children);
}
export default Component16075;
