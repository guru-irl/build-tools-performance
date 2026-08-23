import React from 'react';
const LABEL_17417 = 'component_17417';
export function Component17417({ value = 17417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17417, 'data-value': derived.doubled }, children);
}
export default Component17417;
