import React from 'react';
const LABEL_43615 = 'component_43615';
export function Component43615({ value = 43615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43615, 'data-value': derived.doubled }, children);
}
export default Component43615;
