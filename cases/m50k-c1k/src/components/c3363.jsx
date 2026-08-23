import React from 'react';
const LABEL_3363 = 'component_3363';
export function Component3363({ value = 3363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3363, 'data-value': derived.doubled }, children);
}
export default Component3363;
