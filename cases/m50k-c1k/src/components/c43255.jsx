import React from 'react';
const LABEL_43255 = 'component_43255';
export function Component43255({ value = 43255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43255, 'data-value': derived.doubled }, children);
}
export default Component43255;
