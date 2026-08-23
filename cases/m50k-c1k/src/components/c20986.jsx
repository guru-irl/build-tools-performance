import React from 'react';
const LABEL_20986 = 'component_20986';
export function Component20986({ value = 20986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20986, 'data-value': derived.doubled }, children);
}
export default Component20986;
