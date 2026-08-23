import React from 'react';
const LABEL_43191 = 'component_43191';
export function Component43191({ value = 43191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43191, 'data-value': derived.doubled }, children);
}
export default Component43191;
