import React from 'react';
const LABEL_2952 = 'component_2952';
export function Component2952({ value = 2952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2952, 'data-value': derived.doubled }, children);
}
export default Component2952;
