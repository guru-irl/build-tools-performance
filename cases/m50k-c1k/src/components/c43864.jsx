import React from 'react';
const LABEL_43864 = 'component_43864';
export function Component43864({ value = 43864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43864, 'data-value': derived.doubled }, children);
}
export default Component43864;
