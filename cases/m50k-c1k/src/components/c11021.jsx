import React from 'react';
const LABEL_11021 = 'component_11021';
export function Component11021({ value = 11021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11021, 'data-value': derived.doubled }, children);
}
export default Component11021;
