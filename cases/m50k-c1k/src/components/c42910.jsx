import React from 'react';
const LABEL_42910 = 'component_42910';
export function Component42910({ value = 42910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42910, 'data-value': derived.doubled }, children);
}
export default Component42910;
