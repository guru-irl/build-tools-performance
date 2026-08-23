import React from 'react';
const LABEL_20764 = 'component_20764';
export function Component20764({ value = 20764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20764, 'data-value': derived.doubled }, children);
}
export default Component20764;
