import React from 'react';
const LABEL_37952 = 'component_37952';
export function Component37952({ value = 37952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37952, 'data-value': derived.doubled }, children);
}
export default Component37952;
