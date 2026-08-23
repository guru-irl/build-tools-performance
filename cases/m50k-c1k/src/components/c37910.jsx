import React from 'react';
const LABEL_37910 = 'component_37910';
export function Component37910({ value = 37910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37910, 'data-value': derived.doubled }, children);
}
export default Component37910;
