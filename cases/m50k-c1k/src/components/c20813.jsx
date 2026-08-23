import React from 'react';
const LABEL_20813 = 'component_20813';
export function Component20813({ value = 20813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20813, 'data-value': derived.doubled }, children);
}
export default Component20813;
