import React from 'react';
const LABEL_43986 = 'component_43986';
export function Component43986({ value = 43986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43986, 'data-value': derived.doubled }, children);
}
export default Component43986;
