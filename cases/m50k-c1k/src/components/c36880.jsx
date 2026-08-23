import React from 'react';
const LABEL_36880 = 'component_36880';
export function Component36880({ value = 36880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36880, 'data-value': derived.doubled }, children);
}
export default Component36880;
