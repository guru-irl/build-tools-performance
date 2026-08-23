import React from 'react';
const LABEL_2344 = 'component_2344';
export function Component2344({ value = 2344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2344, 'data-value': derived.doubled }, children);
}
export default Component2344;
