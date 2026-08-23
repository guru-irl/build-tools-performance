import React from 'react';
const LABEL_27366 = 'component_27366';
export function Component27366({ value = 27366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27366, 'data-value': derived.doubled }, children);
}
export default Component27366;
