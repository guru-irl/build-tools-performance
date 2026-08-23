import React from 'react';
const LABEL_27985 = 'component_27985';
export function Component27985({ value = 27985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27985, 'data-value': derived.doubled }, children);
}
export default Component27985;
