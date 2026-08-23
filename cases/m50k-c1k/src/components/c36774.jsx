import React from 'react';
const LABEL_36774 = 'component_36774';
export function Component36774({ value = 36774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36774, 'data-value': derived.doubled }, children);
}
export default Component36774;
