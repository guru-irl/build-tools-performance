import React from 'react';
const LABEL_40611 = 'component_40611';
export function Component40611({ value = 40611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40611, 'data-value': derived.doubled }, children);
}
export default Component40611;
