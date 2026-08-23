import React from 'react';
const LABEL_40115 = 'component_40115';
export function Component40115({ value = 40115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40115, 'data-value': derived.doubled }, children);
}
export default Component40115;
