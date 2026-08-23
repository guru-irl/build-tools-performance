import React from 'react';
const LABEL_4288 = 'component_4288';
export function Component4288({ value = 4288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4288, 'data-value': derived.doubled }, children);
}
export default Component4288;
