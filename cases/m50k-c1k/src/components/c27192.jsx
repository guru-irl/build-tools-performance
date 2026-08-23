import React from 'react';
const LABEL_27192 = 'component_27192';
export function Component27192({ value = 27192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27192, 'data-value': derived.doubled }, children);
}
export default Component27192;
