import React from 'react';
const LABEL_4805 = 'component_4805';
export function Component4805({ value = 4805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4805, 'data-value': derived.doubled }, children);
}
export default Component4805;
