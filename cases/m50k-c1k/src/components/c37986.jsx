import React from 'react';
const LABEL_37986 = 'component_37986';
export function Component37986({ value = 37986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37986, 'data-value': derived.doubled }, children);
}
export default Component37986;
