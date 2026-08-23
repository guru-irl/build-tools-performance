import React from 'react';
const LABEL_40458 = 'component_40458';
export function Component40458({ value = 40458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40458, 'data-value': derived.doubled }, children);
}
export default Component40458;
