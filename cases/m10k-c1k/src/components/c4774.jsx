import React from 'react';
const LABEL_4774 = 'component_4774';
export function Component4774({ value = 4774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4774, 'data-value': derived.doubled }, children);
}
export default Component4774;
