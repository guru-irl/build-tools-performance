import React from 'react';
const LABEL_27958 = 'component_27958';
export function Component27958({ value = 27958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27958, 'data-value': derived.doubled }, children);
}
export default Component27958;
