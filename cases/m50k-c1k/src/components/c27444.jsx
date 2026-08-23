import React from 'react';
const LABEL_27444 = 'component_27444';
export function Component27444({ value = 27444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27444, 'data-value': derived.doubled }, children);
}
export default Component27444;
