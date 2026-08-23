import React from 'react';
const LABEL_39082 = 'component_39082';
export function Component39082({ value = 39082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39082, 'data-value': derived.doubled }, children);
}
export default Component39082;
