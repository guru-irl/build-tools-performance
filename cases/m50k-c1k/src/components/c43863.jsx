import React from 'react';
const LABEL_43863 = 'component_43863';
export function Component43863({ value = 43863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43863, 'data-value': derived.doubled }, children);
}
export default Component43863;
