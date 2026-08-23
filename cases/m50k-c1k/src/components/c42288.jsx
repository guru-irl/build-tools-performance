import React from 'react';
const LABEL_42288 = 'component_42288';
export function Component42288({ value = 42288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42288, 'data-value': derived.doubled }, children);
}
export default Component42288;
