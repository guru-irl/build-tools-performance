import React from 'react';
const LABEL_42986 = 'component_42986';
export function Component42986({ value = 42986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42986, 'data-value': derived.doubled }, children);
}
export default Component42986;
