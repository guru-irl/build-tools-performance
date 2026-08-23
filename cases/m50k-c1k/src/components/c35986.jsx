import React from 'react';
const LABEL_35986 = 'component_35986';
export function Component35986({ value = 35986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35986, 'data-value': derived.doubled }, children);
}
export default Component35986;
