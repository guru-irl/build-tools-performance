import React from 'react';
const LABEL_16764 = 'component_16764';
export function Component16764({ value = 16764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16764, 'data-value': derived.doubled }, children);
}
export default Component16764;
