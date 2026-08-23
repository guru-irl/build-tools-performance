import React from 'react';
const LABEL_41288 = 'component_41288';
export function Component41288({ value = 41288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41288, 'data-value': derived.doubled }, children);
}
export default Component41288;
