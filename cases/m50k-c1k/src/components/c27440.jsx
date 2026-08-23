import React from 'react';
const LABEL_27440 = 'component_27440';
export function Component27440({ value = 27440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27440, 'data-value': derived.doubled }, children);
}
export default Component27440;
