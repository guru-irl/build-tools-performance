import React from 'react';
const LABEL_18332 = 'component_18332';
export function Component18332({ value = 18332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18332, 'data-value': derived.doubled }, children);
}
export default Component18332;
