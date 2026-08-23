import React from 'react';
const LABEL_43977 = 'component_43977';
export function Component43977({ value = 43977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43977, 'data-value': derived.doubled }, children);
}
export default Component43977;
