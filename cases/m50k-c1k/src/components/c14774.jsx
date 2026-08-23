import React from 'react';
const LABEL_14774 = 'component_14774';
export function Component14774({ value = 14774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14774, 'data-value': derived.doubled }, children);
}
export default Component14774;
