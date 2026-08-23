import React from 'react';
const LABEL_27844 = 'component_27844';
export function Component27844({ value = 27844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27844, 'data-value': derived.doubled }, children);
}
export default Component27844;
