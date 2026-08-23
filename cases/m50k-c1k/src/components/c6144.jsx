import React from 'react';
const LABEL_6144 = 'component_6144';
export function Component6144({ value = 6144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6144, 'data-value': derived.doubled }, children);
}
export default Component6144;
