import React from 'react';
const LABEL_4239 = 'component_4239';
export function Component4239({ value = 4239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4239, 'data-value': derived.doubled }, children);
}
export default Component4239;
