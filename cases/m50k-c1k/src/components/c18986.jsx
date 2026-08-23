import React from 'react';
const LABEL_18986 = 'component_18986';
export function Component18986({ value = 18986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18986, 'data-value': derived.doubled }, children);
}
export default Component18986;
