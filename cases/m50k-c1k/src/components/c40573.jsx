import React from 'react';
const LABEL_40573 = 'component_40573';
export function Component40573({ value = 40573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40573, 'data-value': derived.doubled }, children);
}
export default Component40573;
