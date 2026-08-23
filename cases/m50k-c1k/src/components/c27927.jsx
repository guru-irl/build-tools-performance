import React from 'react';
const LABEL_27927 = 'component_27927';
export function Component27927({ value = 27927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27927, 'data-value': derived.doubled }, children);
}
export default Component27927;
