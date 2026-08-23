import React from 'react';
const LABEL_13896 = 'component_13896';
export function Component13896({ value = 13896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13896, 'data-value': derived.doubled }, children);
}
export default Component13896;
