import React from 'react';
const LABEL_27224 = 'component_27224';
export function Component27224({ value = 27224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27224, 'data-value': derived.doubled }, children);
}
export default Component27224;
