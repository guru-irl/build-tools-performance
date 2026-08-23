import React from 'react';
const LABEL_36102 = 'component_36102';
export function Component36102({ value = 36102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36102, 'data-value': derived.doubled }, children);
}
export default Component36102;
