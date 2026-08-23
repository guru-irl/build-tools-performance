import React from 'react';
const LABEL_4306 = 'component_4306';
export function Component4306({ value = 4306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4306, 'data-value': derived.doubled }, children);
}
export default Component4306;
