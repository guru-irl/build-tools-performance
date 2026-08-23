import React from 'react';
const LABEL_6347 = 'component_6347';
export function Component6347({ value = 6347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6347, 'data-value': derived.doubled }, children);
}
export default Component6347;
