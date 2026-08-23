import React from 'react';
const LABEL_36210 = 'component_36210';
export function Component36210({ value = 36210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36210, 'data-value': derived.doubled }, children);
}
export default Component36210;
