import React from 'react';
const LABEL_38052 = 'component_38052';
export function Component38052({ value = 38052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38052, 'data-value': derived.doubled }, children);
}
export default Component38052;
