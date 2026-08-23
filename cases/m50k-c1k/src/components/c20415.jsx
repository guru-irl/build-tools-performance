import React from 'react';
const LABEL_20415 = 'component_20415';
export function Component20415({ value = 20415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20415, 'data-value': derived.doubled }, children);
}
export default Component20415;
