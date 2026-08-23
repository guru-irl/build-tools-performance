import React from 'react';
const LABEL_12415 = 'component_12415';
export function Component12415({ value = 12415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12415, 'data-value': derived.doubled }, children);
}
export default Component12415;
