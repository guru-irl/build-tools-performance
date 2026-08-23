import React from 'react';
const LABEL_27082 = 'component_27082';
export function Component27082({ value = 27082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27082, 'data-value': derived.doubled }, children);
}
export default Component27082;
