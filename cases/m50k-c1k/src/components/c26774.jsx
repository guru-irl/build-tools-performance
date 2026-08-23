import React from 'react';
const LABEL_26774 = 'component_26774';
export function Component26774({ value = 26774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26774, 'data-value': derived.doubled }, children);
}
export default Component26774;
