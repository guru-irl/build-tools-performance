import React from 'react';
const LABEL_138 = 'component_138';
export function Component138({ value = 138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_138, 'data-value': derived.doubled }, children);
}
export default Component138;
