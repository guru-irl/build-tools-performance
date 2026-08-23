import React from 'react';
const LABEL_34317 = 'component_34317';
export function Component34317({ value = 34317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34317, 'data-value': derived.doubled }, children);
}
export default Component34317;
