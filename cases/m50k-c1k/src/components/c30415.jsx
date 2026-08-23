import React from 'react';
const LABEL_30415 = 'component_30415';
export function Component30415({ value = 30415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30415, 'data-value': derived.doubled }, children);
}
export default Component30415;
