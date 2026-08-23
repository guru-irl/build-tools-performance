import React from 'react';
const LABEL_5073 = 'component_5073';
export function Component5073({ value = 5073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5073, 'data-value': derived.doubled }, children);
}
export default Component5073;
