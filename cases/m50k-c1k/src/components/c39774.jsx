import React from 'react';
const LABEL_39774 = 'component_39774';
export function Component39774({ value = 39774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39774, 'data-value': derived.doubled }, children);
}
export default Component39774;
