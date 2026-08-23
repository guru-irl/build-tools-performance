import React from 'react';
const LABEL_22417 = 'component_22417';
export function Component22417({ value = 22417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22417, 'data-value': derived.doubled }, children);
}
export default Component22417;
