import React from 'react';
const LABEL_22969 = 'component_22969';
export function Component22969({ value = 22969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22969, 'data-value': derived.doubled }, children);
}
export default Component22969;
