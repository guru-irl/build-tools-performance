import React from 'react';
const LABEL_26363 = 'component_26363';
export function Component26363({ value = 26363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26363, 'data-value': derived.doubled }, children);
}
export default Component26363;
