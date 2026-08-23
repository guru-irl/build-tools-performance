import React from 'react';
const LABEL_27956 = 'component_27956';
export function Component27956({ value = 27956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27956, 'data-value': derived.doubled }, children);
}
export default Component27956;
