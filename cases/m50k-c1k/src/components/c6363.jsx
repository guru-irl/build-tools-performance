import React from 'react';
const LABEL_6363 = 'component_6363';
export function Component6363({ value = 6363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6363, 'data-value': derived.doubled }, children);
}
export default Component6363;
