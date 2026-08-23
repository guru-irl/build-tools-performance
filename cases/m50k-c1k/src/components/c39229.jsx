import React from 'react';
const LABEL_39229 = 'component_39229';
export function Component39229({ value = 39229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39229, 'data-value': derived.doubled }, children);
}
export default Component39229;
