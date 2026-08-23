import React from 'react';
const LABEL_46218 = 'component_46218';
export function Component46218({ value = 46218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46218, 'data-value': derived.doubled }, children);
}
export default Component46218;
