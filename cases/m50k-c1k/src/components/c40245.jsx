import React from 'react';
const LABEL_40245 = 'component_40245';
export function Component40245({ value = 40245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40245, 'data-value': derived.doubled }, children);
}
export default Component40245;
