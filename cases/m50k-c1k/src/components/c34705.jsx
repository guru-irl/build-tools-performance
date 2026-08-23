import React from 'react';
const LABEL_34705 = 'component_34705';
export function Component34705({ value = 34705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34705, 'data-value': derived.doubled }, children);
}
export default Component34705;
