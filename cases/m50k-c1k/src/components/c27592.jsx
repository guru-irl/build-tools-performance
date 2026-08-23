import React from 'react';
const LABEL_27592 = 'component_27592';
export function Component27592({ value = 27592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27592, 'data-value': derived.doubled }, children);
}
export default Component27592;
