import React from 'react';
const LABEL_27895 = 'component_27895';
export function Component27895({ value = 27895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27895, 'data-value': derived.doubled }, children);
}
export default Component27895;
