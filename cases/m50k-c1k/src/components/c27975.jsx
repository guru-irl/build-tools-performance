import React from 'react';
const LABEL_27975 = 'component_27975';
export function Component27975({ value = 27975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27975, 'data-value': derived.doubled }, children);
}
export default Component27975;
