import React from 'react';
const LABEL_26986 = 'component_26986';
export function Component26986({ value = 26986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26986, 'data-value': derived.doubled }, children);
}
export default Component26986;
