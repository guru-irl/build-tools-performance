import React from 'react';
const LABEL_20808 = 'component_20808';
export function Component20808({ value = 20808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20808, 'data-value': derived.doubled }, children);
}
export default Component20808;
