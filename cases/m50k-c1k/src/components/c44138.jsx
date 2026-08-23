import React from 'react';
const LABEL_44138 = 'component_44138';
export function Component44138({ value = 44138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44138, 'data-value': derived.doubled }, children);
}
export default Component44138;
