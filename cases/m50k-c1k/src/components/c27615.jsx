import React from 'react';
const LABEL_27615 = 'component_27615';
export function Component27615({ value = 27615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27615, 'data-value': derived.doubled }, children);
}
export default Component27615;
