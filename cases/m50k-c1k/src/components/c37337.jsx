import React from 'react';
const LABEL_37337 = 'component_37337';
export function Component37337({ value = 37337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37337, 'data-value': derived.doubled }, children);
}
export default Component37337;
