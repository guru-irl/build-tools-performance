import React from 'react';
const LABEL_27986 = 'component_27986';
export function Component27986({ value = 27986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27986, 'data-value': derived.doubled }, children);
}
export default Component27986;
