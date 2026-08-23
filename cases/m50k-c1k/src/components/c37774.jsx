import React from 'react';
const LABEL_37774 = 'component_37774';
export function Component37774({ value = 37774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37774, 'data-value': derived.doubled }, children);
}
export default Component37774;
