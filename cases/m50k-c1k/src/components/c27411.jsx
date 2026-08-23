import React from 'react';
const LABEL_27411 = 'component_27411';
export function Component27411({ value = 27411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27411, 'data-value': derived.doubled }, children);
}
export default Component27411;
