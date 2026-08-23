import React from 'react';
const LABEL_27887 = 'component_27887';
export function Component27887({ value = 27887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27887, 'data-value': derived.doubled }, children);
}
export default Component27887;
