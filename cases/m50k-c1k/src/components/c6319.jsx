import React from 'react';
const LABEL_6319 = 'component_6319';
export function Component6319({ value = 6319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6319, 'data-value': derived.doubled }, children);
}
export default Component6319;
