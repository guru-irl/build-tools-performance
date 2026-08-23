import React from 'react';
const LABEL_20006 = 'component_20006';
export function Component20006({ value = 20006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20006, 'data-value': derived.doubled }, children);
}
export default Component20006;
