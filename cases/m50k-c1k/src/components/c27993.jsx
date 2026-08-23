import React from 'react';
const LABEL_27993 = 'component_27993';
export function Component27993({ value = 27993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27993, 'data-value': derived.doubled }, children);
}
export default Component27993;
