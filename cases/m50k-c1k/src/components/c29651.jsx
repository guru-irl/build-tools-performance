import React from 'react';
const LABEL_29651 = 'component_29651';
export function Component29651({ value = 29651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29651, 'data-value': derived.doubled }, children);
}
export default Component29651;
