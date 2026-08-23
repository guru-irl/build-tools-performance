import React from 'react';
const LABEL_4871 = 'component_4871';
export function Component4871({ value = 4871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4871, 'data-value': derived.doubled }, children);
}
export default Component4871;
