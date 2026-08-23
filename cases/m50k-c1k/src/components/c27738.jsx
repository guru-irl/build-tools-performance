import React from 'react';
const LABEL_27738 = 'component_27738';
export function Component27738({ value = 27738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27738, 'data-value': derived.doubled }, children);
}
export default Component27738;
