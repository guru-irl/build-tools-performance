import React from 'react';
const LABEL_10266 = 'component_10266';
export function Component10266({ value = 10266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10266, 'data-value': derived.doubled }, children);
}
export default Component10266;
