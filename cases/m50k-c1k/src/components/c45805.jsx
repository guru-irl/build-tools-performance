import React from 'react';
const LABEL_45805 = 'component_45805';
export function Component45805({ value = 45805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45805, 'data-value': derived.doubled }, children);
}
export default Component45805;
