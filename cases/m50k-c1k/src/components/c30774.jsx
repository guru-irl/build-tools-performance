import React from 'react';
const LABEL_30774 = 'component_30774';
export function Component30774({ value = 30774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30774, 'data-value': derived.doubled }, children);
}
export default Component30774;
