import React from 'react';
const LABEL_37619 = 'component_37619';
export function Component37619({ value = 37619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37619, 'data-value': derived.doubled }, children);
}
export default Component37619;
