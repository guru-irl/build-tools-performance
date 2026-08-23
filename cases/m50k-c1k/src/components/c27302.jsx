import React from 'react';
const LABEL_27302 = 'component_27302';
export function Component27302({ value = 27302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27302, 'data-value': derived.doubled }, children);
}
export default Component27302;
