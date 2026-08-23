import React from 'react';
const LABEL_2936 = 'component_2936';
export function Component2936({ value = 2936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2936, 'data-value': derived.doubled }, children);
}
export default Component2936;
