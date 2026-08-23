import React from 'react';
const LABEL_46586 = 'component_46586';
export function Component46586({ value = 46586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46586, 'data-value': derived.doubled }, children);
}
export default Component46586;
