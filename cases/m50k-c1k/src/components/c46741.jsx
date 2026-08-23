import React from 'react';
const LABEL_46741 = 'component_46741';
export function Component46741({ value = 46741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46741, 'data-value': derived.doubled }, children);
}
export default Component46741;
