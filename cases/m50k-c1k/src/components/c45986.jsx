import React from 'react';
const LABEL_45986 = 'component_45986';
export function Component45986({ value = 45986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45986, 'data-value': derived.doubled }, children);
}
export default Component45986;
