import React from 'react';
const LABEL_8383 = 'component_8383';
export function Component8383({ value = 8383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8383, 'data-value': derived.doubled }, children);
}
export default Component8383;
