import React from 'react';
const LABEL_46313 = 'component_46313';
export function Component46313({ value = 46313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46313, 'data-value': derived.doubled }, children);
}
export default Component46313;
