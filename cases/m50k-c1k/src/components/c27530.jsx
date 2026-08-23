import React from 'react';
const LABEL_27530 = 'component_27530';
export function Component27530({ value = 27530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27530, 'data-value': derived.doubled }, children);
}
export default Component27530;
