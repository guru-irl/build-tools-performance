import React from 'react';
const LABEL_19986 = 'component_19986';
export function Component19986({ value = 19986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19986, 'data-value': derived.doubled }, children);
}
export default Component19986;
