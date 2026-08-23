import React from 'react';
const LABEL_37021 = 'component_37021';
export function Component37021({ value = 37021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37021, 'data-value': derived.doubled }, children);
}
export default Component37021;
