import React from 'react';
const LABEL_4931 = 'component_4931';
export function Component4931({ value = 4931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4931, 'data-value': derived.doubled }, children);
}
export default Component4931;
