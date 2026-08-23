import React from 'react';
const LABEL_13844 = 'component_13844';
export function Component13844({ value = 13844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13844, 'data-value': derived.doubled }, children);
}
export default Component13844;
