import React from 'react';
const LABEL_43554 = 'component_43554';
export function Component43554({ value = 43554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43554, 'data-value': derived.doubled }, children);
}
export default Component43554;
