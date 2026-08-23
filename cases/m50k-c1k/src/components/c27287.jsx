import React from 'react';
const LABEL_27287 = 'component_27287';
export function Component27287({ value = 27287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27287, 'data-value': derived.doubled }, children);
}
export default Component27287;
