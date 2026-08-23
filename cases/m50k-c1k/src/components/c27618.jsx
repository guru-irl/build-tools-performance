import React from 'react';
const LABEL_27618 = 'component_27618';
export function Component27618({ value = 27618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27618, 'data-value': derived.doubled }, children);
}
export default Component27618;
