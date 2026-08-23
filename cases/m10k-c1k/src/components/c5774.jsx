import React from 'react';
const LABEL_5774 = 'component_5774';
export function Component5774({ value = 5774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5774, 'data-value': derived.doubled }, children);
}
export default Component5774;
