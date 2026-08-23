import React from 'react';
const LABEL_27656 = 'component_27656';
export function Component27656({ value = 27656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27656, 'data-value': derived.doubled }, children);
}
export default Component27656;
