import React from 'react';
const LABEL_20447 = 'component_20447';
export function Component20447({ value = 20447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20447, 'data-value': derived.doubled }, children);
}
export default Component20447;
