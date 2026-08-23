import React from 'react';
const LABEL_37210 = 'component_37210';
export function Component37210({ value = 37210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37210, 'data-value': derived.doubled }, children);
}
export default Component37210;
