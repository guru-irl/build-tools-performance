import React from 'react';
const LABEL_27016 = 'component_27016';
export function Component27016({ value = 27016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27016, 'data-value': derived.doubled }, children);
}
export default Component27016;
