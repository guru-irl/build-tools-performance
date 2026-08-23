import React from 'react';
const LABEL_4078 = 'component_4078';
export function Component4078({ value = 4078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4078, 'data-value': derived.doubled }, children);
}
export default Component4078;
