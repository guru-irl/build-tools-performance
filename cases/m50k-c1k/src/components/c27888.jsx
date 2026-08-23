import React from 'react';
const LABEL_27888 = 'component_27888';
export function Component27888({ value = 27888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27888, 'data-value': derived.doubled }, children);
}
export default Component27888;
