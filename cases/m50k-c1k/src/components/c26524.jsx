import React from 'react';
const LABEL_26524 = 'component_26524';
export function Component26524({ value = 26524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26524, 'data-value': derived.doubled }, children);
}
export default Component26524;
