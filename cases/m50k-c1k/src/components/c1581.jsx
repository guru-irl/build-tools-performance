import React from 'react';
const LABEL_1581 = 'component_1581';
export function Component1581({ value = 1581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1581, 'data-value': derived.doubled }, children);
}
export default Component1581;
