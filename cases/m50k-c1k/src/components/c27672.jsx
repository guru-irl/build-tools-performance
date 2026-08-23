import React from 'react';
const LABEL_27672 = 'component_27672';
export function Component27672({ value = 27672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27672, 'data-value': derived.doubled }, children);
}
export default Component27672;
