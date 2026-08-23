import React from 'react';
const LABEL_34986 = 'component_34986';
export function Component34986({ value = 34986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34986, 'data-value': derived.doubled }, children);
}
export default Component34986;
