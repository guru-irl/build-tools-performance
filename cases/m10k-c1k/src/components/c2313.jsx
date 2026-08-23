import React from 'react';
const LABEL_2313 = 'component_2313';
export function Component2313({ value = 2313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2313, 'data-value': derived.doubled }, children);
}
export default Component2313;
