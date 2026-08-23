import React from 'react';
const LABEL_27894 = 'component_27894';
export function Component27894({ value = 27894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27894, 'data-value': derived.doubled }, children);
}
export default Component27894;
