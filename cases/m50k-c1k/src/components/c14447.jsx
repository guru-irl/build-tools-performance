import React from 'react';
const LABEL_14447 = 'component_14447';
export function Component14447({ value = 14447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14447, 'data-value': derived.doubled }, children);
}
export default Component14447;
