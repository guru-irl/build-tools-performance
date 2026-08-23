import React from 'react';
const LABEL_20347 = 'component_20347';
export function Component20347({ value = 20347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20347, 'data-value': derived.doubled }, children);
}
export default Component20347;
