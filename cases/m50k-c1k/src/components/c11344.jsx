import React from 'react';
const LABEL_11344 = 'component_11344';
export function Component11344({ value = 11344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11344, 'data-value': derived.doubled }, children);
}
export default Component11344;
