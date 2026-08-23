import React from 'react';
const LABEL_30986 = 'component_30986';
export function Component30986({ value = 30986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30986, 'data-value': derived.doubled }, children);
}
export default Component30986;
