import React from 'react';
const LABEL_43895 = 'component_43895';
export function Component43895({ value = 43895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43895, 'data-value': derived.doubled }, children);
}
export default Component43895;
