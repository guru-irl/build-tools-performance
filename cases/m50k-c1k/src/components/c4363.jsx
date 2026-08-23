import React from 'react';
const LABEL_4363 = 'component_4363';
export function Component4363({ value = 4363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4363, 'data-value': derived.doubled }, children);
}
export default Component4363;
