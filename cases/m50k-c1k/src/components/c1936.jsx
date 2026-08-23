import React from 'react';
const LABEL_1936 = 'component_1936';
export function Component1936({ value = 1936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1936, 'data-value': derived.doubled }, children);
}
export default Component1936;
