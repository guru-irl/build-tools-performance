import React from 'react';
const LABEL_43906 = 'component_43906';
export function Component43906({ value = 43906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43906, 'data-value': derived.doubled }, children);
}
export default Component43906;
