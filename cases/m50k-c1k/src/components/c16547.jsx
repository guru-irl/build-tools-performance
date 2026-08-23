import React from 'react';
const LABEL_16547 = 'component_16547';
export function Component16547({ value = 16547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16547, 'data-value': derived.doubled }, children);
}
export default Component16547;
