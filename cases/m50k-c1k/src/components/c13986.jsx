import React from 'react';
const LABEL_13986 = 'component_13986';
export function Component13986({ value = 13986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13986, 'data-value': derived.doubled }, children);
}
export default Component13986;
