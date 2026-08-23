import React from 'react';
const LABEL_30412 = 'component_30412';
export function Component30412({ value = 30412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30412, 'data-value': derived.doubled }, children);
}
export default Component30412;
