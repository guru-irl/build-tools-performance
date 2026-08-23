import React from 'react';
const LABEL_20788 = 'component_20788';
export function Component20788({ value = 20788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20788, 'data-value': derived.doubled }, children);
}
export default Component20788;
