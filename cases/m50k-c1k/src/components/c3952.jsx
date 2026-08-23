import React from 'react';
const LABEL_3952 = 'component_3952';
export function Component3952({ value = 3952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3952, 'data-value': derived.doubled }, children);
}
export default Component3952;
