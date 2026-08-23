import React from 'react';
const LABEL_27283 = 'component_27283';
export function Component27283({ value = 27283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27283, 'data-value': derived.doubled }, children);
}
export default Component27283;
