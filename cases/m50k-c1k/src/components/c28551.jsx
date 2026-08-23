import React from 'react';
const LABEL_28551 = 'component_28551';
export function Component28551({ value = 28551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28551, 'data-value': derived.doubled }, children);
}
export default Component28551;
