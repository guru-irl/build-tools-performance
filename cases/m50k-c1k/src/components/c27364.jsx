import React from 'react';
const LABEL_27364 = 'component_27364';
export function Component27364({ value = 27364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27364, 'data-value': derived.doubled }, children);
}
export default Component27364;
