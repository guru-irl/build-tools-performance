import React from 'react';
const LABEL_27010 = 'component_27010';
export function Component27010({ value = 27010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27010, 'data-value': derived.doubled }, children);
}
export default Component27010;
