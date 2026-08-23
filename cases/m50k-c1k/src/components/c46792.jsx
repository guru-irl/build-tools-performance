import React from 'react';
const LABEL_46792 = 'component_46792';
export function Component46792({ value = 46792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46792, 'data-value': derived.doubled }, children);
}
export default Component46792;
