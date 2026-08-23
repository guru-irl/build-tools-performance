import React from 'react';
const LABEL_8910 = 'component_8910';
export function Component8910({ value = 8910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8910, 'data-value': derived.doubled }, children);
}
export default Component8910;
