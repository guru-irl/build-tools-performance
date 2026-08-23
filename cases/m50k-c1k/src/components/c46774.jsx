import React from 'react';
const LABEL_46774 = 'component_46774';
export function Component46774({ value = 46774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46774, 'data-value': derived.doubled }, children);
}
export default Component46774;
