import React from 'react';
const LABEL_8347 = 'component_8347';
export function Component8347({ value = 8347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8347, 'data-value': derived.doubled }, children);
}
export default Component8347;
