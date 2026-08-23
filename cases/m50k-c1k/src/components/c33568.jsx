import React from 'react';
const LABEL_33568 = 'component_33568';
export function Component33568({ value = 33568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33568, 'data-value': derived.doubled }, children);
}
export default Component33568;
