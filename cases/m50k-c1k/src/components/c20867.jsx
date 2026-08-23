import React from 'react';
const LABEL_20867 = 'component_20867';
export function Component20867({ value = 20867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20867, 'data-value': derived.doubled }, children);
}
export default Component20867;
