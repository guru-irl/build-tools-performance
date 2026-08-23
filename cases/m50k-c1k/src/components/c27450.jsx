import React from 'react';
const LABEL_27450 = 'component_27450';
export function Component27450({ value = 27450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27450, 'data-value': derived.doubled }, children);
}
export default Component27450;
