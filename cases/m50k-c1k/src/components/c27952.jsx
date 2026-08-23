import React from 'react';
const LABEL_27952 = 'component_27952';
export function Component27952({ value = 27952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27952, 'data-value': derived.doubled }, children);
}
export default Component27952;
