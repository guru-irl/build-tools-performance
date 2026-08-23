import React from 'react';
const LABEL_46070 = 'component_46070';
export function Component46070({ value = 46070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46070, 'data-value': derived.doubled }, children);
}
export default Component46070;
