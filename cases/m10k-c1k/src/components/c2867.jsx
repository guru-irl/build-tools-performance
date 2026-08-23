import React from 'react';
const LABEL_2867 = 'component_2867';
export function Component2867({ value = 2867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2867, 'data-value': derived.doubled }, children);
}
export default Component2867;
