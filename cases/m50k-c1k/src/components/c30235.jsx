import React from 'react';
const LABEL_30235 = 'component_30235';
export function Component30235({ value = 30235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30235, 'data-value': derived.doubled }, children);
}
export default Component30235;
