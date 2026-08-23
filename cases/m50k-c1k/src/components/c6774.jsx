import React from 'react';
const LABEL_6774 = 'component_6774';
export function Component6774({ value = 6774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6774, 'data-value': derived.doubled }, children);
}
export default Component6774;
