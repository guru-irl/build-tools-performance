import React from 'react';
const LABEL_20774 = 'component_20774';
export function Component20774({ value = 20774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20774, 'data-value': derived.doubled }, children);
}
export default Component20774;
