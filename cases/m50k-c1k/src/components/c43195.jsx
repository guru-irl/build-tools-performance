import React from 'react';
const LABEL_43195 = 'component_43195';
export function Component43195({ value = 43195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43195, 'data-value': derived.doubled }, children);
}
export default Component43195;
