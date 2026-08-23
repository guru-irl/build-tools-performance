import React from 'react';
const LABEL_12581 = 'component_12581';
export function Component12581({ value = 12581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12581, 'data-value': derived.doubled }, children);
}
export default Component12581;
