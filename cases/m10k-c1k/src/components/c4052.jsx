import React from 'react';
const LABEL_4052 = 'component_4052';
export function Component4052({ value = 4052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4052, 'data-value': derived.doubled }, children);
}
export default Component4052;
