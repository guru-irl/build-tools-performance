import React from 'react';
const LABEL_4174 = 'component_4174';
export function Component4174({ value = 4174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4174, 'data-value': derived.doubled }, children);
}
export default Component4174;
