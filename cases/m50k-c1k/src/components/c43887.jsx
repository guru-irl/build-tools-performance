import React from 'react';
const LABEL_43887 = 'component_43887';
export function Component43887({ value = 43887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43887, 'data-value': derived.doubled }, children);
}
export default Component43887;
