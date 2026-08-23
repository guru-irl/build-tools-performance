import React from 'react';
const LABEL_2580 = 'component_2580';
export function Component2580({ value = 2580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2580, 'data-value': derived.doubled }, children);
}
export default Component2580;
